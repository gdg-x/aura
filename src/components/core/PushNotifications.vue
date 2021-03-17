<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn icon text v-on="on" aria-label="Push Notification">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Allow Us to send Push Notification</v-card-title>

        <v-card-text>
          <p>We never spam you by sending unnecessary Push Notification.</p>
          <p>
            <span class="font-weight-bold text--primary">Status:</span>
            {{ token }}
          </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            :loading="isLoading"
            :disabled="buttonText=='Allowed'"
            @click="requestPermission"
          >{{ buttonText }}</v-btn>
          <v-btn color="error" text @click="dialog = false">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import firebase from "@/config/firebase";
import { mapState } from "vuex";
export default {
  name: "PushNotification",
  data() {
    return {
      dialog: false,
      isLoading: false,
      token: "Not Granted Yet",
      buttonText: "Allow"
    };
  },
  computed: {
    ...mapState(["config"])
  },

  methods: {
    requestPermission() {
      try {
        if (firebase.notificationSupported && Notification) {
          firebase.messaging.usePublicVapidKey(
            `${this.config.keysandsecurity.web_push_certificate}`
          );
          this.isLoading = true;
          this.token = "Please wait...";
          Notification.requestPermission().then(permission => {
            if (permission === "granted") {
              let token = localStorage.getItem("pushNotificationToken");
              if (token == null || token.length <= 0) {
                firebase.messaging
                  .getToken({vapidKey:this.config.keysandsecurity.web_push_certificate})
                  .then(currentToken => {
                    if (currentToken) {
                      firebase.firestore
                        .collection("apiEnd")
                        .add({
                          token: currentToken
                        })
                        .then(() => {
                          this.token = "Successfully Subscribed";
                          // alert("SuccessFully Subscribed");
                          this.displayNotificaion();
                          localStorage.setItem(
                            "pushNotificationToken",
                            currentToken
                          );
                          this.isLoading = false;
                          this.buttonText = "Allowed";
                        })
                        .catch(err => {
                          this.token = err;
                          this.isLoading = false;
                        });
                    } else {
                      this.isLoading = false;
                      this.token =
                        "No Instance ID token available. Request permission to generate one.";
                    }
                  })
                  .catch(err => {
                    this.isLoading = false;
                    this.token = err;
                  });
              } else {
                this.token = "Already Subscribed";
                this.isLoading = false;
                this.buttonText = "Allowed";
              }
            } else {
              this.isLoading = false;
              this.token = "Unable to get permission to notify.";
            }
          });
        } else {
          this.isLoading = false;
          this.token = "We Don't Support your browser";
        }
      } catch (err) {
        // alert(err);
        this.isLoading = false;
        this.token = err;
      }
    },
    displayNotificaion() {
      if ("serviceWorker" in navigator) {
        var options = {
          body: "You Successfully Subscribed to Push Notifications",
          icon: "img/icons/favicon-32x32.png",
          dir: "ltr",
          badge: "img/icons/favicon-32x32.png",
          tag: "NewSubscription",
          renotify: true,
          actions: [
            {
              action: "open",
              title: "Visit Site"
            }
          ]
        };
        navigator.serviceWorker.ready.then(function(swreg) {
          swreg.showNotification("Successfully Subscribed", options);
        });
      }
    }
  },
  mounted() {
    let token = localStorage.getItem("pushNotificationToken");
    if (token && token.length > 0) {
      this.token = 'Already Subscribed';
      this.buttonText == "Allowed";
    }
  }
};
</script>
