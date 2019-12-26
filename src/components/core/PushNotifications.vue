<!--<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn icon text v-on="on">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Allow Us to send Push Notification</v-card-title>

        <v-card-text>
          <p>We never spam you by sending Notification.</p>
          <v-progress-circular
            :size="50"
            v-if="isLoading"
            :width="5"
            indeterminate
            :color="this.$vuetify.theme.dark?'':'#ce1013'"
          ></v-progress-circular>
          <p>
            <span class="font-weight-bold text--primary">Token:</span>
            {{ token }}
          </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
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
import firebase from "@/firebase";
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

  methods: {
    requestPermission() {
      try {
        if (firebase.notificationSupported && Notification) {
          firebase.messaging.usePublicVapidKey(
            "BL1bXSTTWszcfqVmCS08tibdCdy3MTCKwovqgCx-oF8wu9tll8iRwhGOypGAkhAzB7EdbfxXH-yEPgBmixKubI0"
          );
          this.isLoading = true;
          this.token = "Please wait...";
          Notification.requestPermission().then(permission => {
            if (permission === "granted") {
              let token = localStorage.getItem("pushNotificationToken");
              if (token == null || token.length <= 0) {
                firebase.messaging
                  .getToken()
                  .then(currentToken => {
                    if (currentToken) {
                      firebase.firestore
                        .collection("apiEnd")
                        .add({
                          token: currentToken
                        })
                        .then(() => {
                          this.token = currentToken;
                          alert("SuccessFully Subscribed");
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
                      this.token =
                        "No Instance ID token available. Request permission to generate one.";
                    }
                  })
                  .catch(err => {
                    this.token = err;
                  });
              } else {
                this.token = token;
                this.buttonText = "Allowed";
              }
            } else {
              this.token = "Unable to get permission to notify.";
            }
            this.isLoading = false;
          });
        }
      } catch (err) {
        // alert(err);
        console.log(err);
      }
    }
  },
  mounted() {
    let token = localStorage.getItem("pushNotificationToken");
    if (token == null || token.length > 0) {
      this.token = token;
      this.buttonText == "Allowed";
    }
  }
};
</script>
