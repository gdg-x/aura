<template>
    <div class="admin-dashboard text-center fill-height">
        <v-content>
            <p>Logged in as {{ userEmail }}</p>
            <button type="button" class="btn btn-warning pb-4" v-on:click="logout">Logout</button>
            <h3>Send Push Notification </h3>
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
                        <v-btn class="primary mt-3" @click="send" :loading="isLoading" text>Login</v-btn>
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