<template>
  <v-content>
    <v-container fluid class="text-center">
      <notification />
    </v-container>
  </v-content>
</template>

<script>
import notification from "../../components/Admin/PushNotification/PushNotification";
import firebase from "@/firebase";
export default {
  components: {
    notification
  },
  name: "admin-dashboard",
  data: () => ({
    userEmail: "",
    title: "",
    body: "",
    isLoading: false,
    isSuccessAlert: false
  }),
  mounted() {
    if (firebase.auth.currentUser) {
      this.userEmail = firebase.auth.currentUser.email;
    } else {
      this.$router.replace("admin");
    }
  },
  methods: {
    send() {
      firebase.firestore
        .collection("apiEnd")
        .get()
        .then(docs => {
          docs.forEach(doc => {
            let token = doc.data().token;
            let body = {
              to: token,
              notification: {
                title: this.title,
                body: this.body,
                // "icon": require('@/assets/img/gdg-logo.svg')
                icon: "https://dsccu.in/images/icons/android-icon-192x192.png"
              }
            };
            const options = {
              method: "POST",
              headers: new Headers({
                Authorization:
                  "key=AAAAJKAFx0g:APA91bG4RFcmV5d3PYgeNSXui0oCgcS8AqnTGe79Zv0X3udydnTnRM0r4EEQlWrpDPmOABVOTBbI3nCuST_3c1Z8yfyIPBwAa4jjoIOrzdocg3lsuJdpo4XIam01_Kk-mKUzaGjsqDep",
                "Content-Type": "application/json"
              })
            };
            options.body = JSON.stringify(body);
            console.log(options.body);
            fetch("https://fcm.googleapis.com/fcm/send", options)
              .then(res => res.json())
              .then(data => {
                this.isSuccessAlert = true;
                console.log(data);
              })
              .catch(err => alert(err));
          });
        });
    },
    logout() {
      firebase.auth.signOut().then(() => {
        this.$router.replace("/admin");
      });
    }
  }
};
</script>

<style>
</style>