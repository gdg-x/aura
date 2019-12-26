<template>   
        <v-container fluid class="">
                <v-row justify="center" align="center">
                    <v-col md="8" class="text-center">
                    <!-- <v-btn :to="'/home'" outlined class="ma-5">Home
                    </v-btn> -->
                    <!-- <v-btn :to="'/dashboard/events'" outlined class="ma-5">Events
                    </v-btn> -->
                        <p>Logged in as {{ userEmail }}</p>
                        <v-btn text class="mb-3" v-on:click="logout">Logout</v-btn>
                        <h3>Send Push Notification </h3>
                        <p>* Push Notification will be sent to all registred users</p>
                        <v-text-field
                            label="Title"
                            v-model="title"
                            type="text"
                            outlined
                        ></v-text-field>
                        <v-textarea
                            type="text"
                            v-model="body"
                            label="Body"
                            outlined
                        ></v-textarea>
                        <v-btn class="primary mt-3" @click="send" :loading="isLoading" text>Send Push</v-btn>
                    </v-col>
                </v-row>
            </v-container>
</template>

<script>
import firebase from "@/firebase";
export default {
  components: {},
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
                icon: ""
              }
            };
            const options = {
              method: "POST",
              headers: new Headers({
                Authorization:
                  "key=",
                "Content-Type": "application/json"
              })
            };
            options.body = JSON.stringify(body);
            console.log(options.body);
            fetch("", options)
              .then(res => res.json())
              .then(data => {
                this.isSuccessAlert = true;
                console.log(data);
              })
              .catch(err => alert(err));
          });
        });
    },
    methods:{
        send(){
            this.isLoading = true;
            firebase.firestore.collection("apiEnd")
            .get()
            .then(docs => {
                docs.forEach(doc => {
                    let token = doc.data().token;
                    let body={  
                        "to": token,  
                        "notification": {    
                            "title": this.title,    
                            "body": {
                                "body":this.body,
                                "eventID": "devfest",
                                "regLink": "",
                            },
                            "tag":"newEvent",
                            "image": "",
                        },
                    }
                    const options = {
                        method: 'POST',
                        headers: new Headers({"Authorization": "key=",'Content-Type': 'application/json',}),
                    };
                    options.body = JSON.stringify(body);
                    console.log(options.body)
                    fetch('', options).then((res) => res.json())
                    .then((data) =>{
                        this.isSuccessAlert = true;
                        console.log(data);
                        this.isLoading = false;
                    })
                    .catch((err)=>alert(err));
                });
            });
        },
        logout(){
            firebase.auth.signOut().then(()=>{
                this.$router.replace('/admin')
            })
        }
    }
  }
};
</script>
