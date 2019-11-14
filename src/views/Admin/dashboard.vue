<template>
    <div class="admin-dashboard text-center fill-height">
        <v-content>
            <p>Logged in as {{ userEmail }}</p>
            <button type="button" class="btn btn-warning pb-4" v-on:click="logout">Logout</button>
            <h3>Send Push Notification </h3>
            <p>* Push Notification will be sent to all registred users</p>
            <v-text-field
                            label="Title"
                            v-model="title"
                            type="text"
                            outlined
                        ></v-text-field>
                        <v-text-field
                            type="text"
                            v-model="body"
                            label="Body"
                            outlined
                        ></v-text-field>
                        <v-btn class="primary mt-3" @click="send" :loading="isLoading" text>Send Push</v-btn>
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
        isLoading:false
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
                            "icon": require('@/assets/img/gdg-logo.svg')
                        }
                    }
                    const options = {
                        method: 'POST',
                        headers: new Headers({"Authorization": "key=AAAAySvZIQs:APA91bHaQjPfid_sLjLRIpG4eVg8kwWgD_w_D_yRgnRh9cO0hCemHkMwKNc79-pZacH0A2Lz6B0u7YBrMyX8J9r697Q-J1NlzuPHGdWsdEl6Y3jmYYfmbgmyJ9WE17sYQOQhpXJzAH53",'Content-Type': 'application/json',}),
                    };
                    options.body = JSON.stringify(body);
                    console.log(options.body)
                    fetch('https://fcm.googleapis.com/fcm/send', options).then((res) => res.json())
                    .then((data) =>  alert(data))
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