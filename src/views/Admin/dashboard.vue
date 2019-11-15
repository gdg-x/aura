<template>
    <div class="admin-dashboard text-center fill-height">
         <v-snackbar
            v-model="isSuccessAlert"
            >
            Push notification sent Successfully
            <v-btn
                color="pink"
                text
                @click="isSuccessAlert = false"
            >
                Close
            </v-btn>
    </v-snackbar>
        <v-content>
            <v-container>
                <v-row>
                    <v-col>
                    <v-btn :to="'/home'" outlined class="ma-5">Home
                    </v-btn>
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
            
        </v-content>
  </div>
</template>

<script>
import firebase from '@/firebase';
export default {
    name:"admin-dashboard",
    data:()=>({
        userEmail:'',
        title:"",
        body:"",
        isLoading:false,
        isSuccessAlert:false
    }),
    mounted(){
        if(firebase.auth.currentUser){
            this.userEmail = firebase.auth.currentUser.email
        }else{
            this.$router.replace('admin')
        }
    },
    methods:{
        send(){
            firebase.firestore.collection("apiEnd")
            .get()
            .then(docs => {
                docs.forEach(doc => {
                    let token = doc.data().token;
                    let body={  
                        "to": token,  
                        "notification": {    
                            "title": this.title,    
                            "body": this.body,    
                            // "icon": require('@/assets/img/gdg-logo.svg')
                            "icon":"https://dsccu.in/images/icons/android-icon-192x192.png"
                        }
                    }
                    const options = {
                        method: 'POST',
                        headers: new Headers({"Authorization": "key=AAAAJKAFx0g:APA91bG4RFcmV5d3PYgeNSXui0oCgcS8AqnTGe79Zv0X3udydnTnRM0r4EEQlWrpDPmOABVOTBbI3nCuST_3c1Z8yfyIPBwAa4jjoIOrzdocg3lsuJdpo4XIam01_Kk-mKUzaGjsqDep",'Content-Type': 'application/json',}),
                    };
                    options.body = JSON.stringify(body);
                    console.log(options.body)
                    fetch('https://fcm.googleapis.com/fcm/send', options).then((res) => res.json())
                    .then((data) =>{
                        this.isSuccessAlert = true;
                        console.log(data);
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
</script>

<style>

</style>