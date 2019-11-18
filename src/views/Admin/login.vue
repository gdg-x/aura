<template>
<v-content>
      <v-container class="mt-0" fill-height>
        <v-row>
            <v-col cols="12">
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col cols="12" md="4" lg="3" class="">
                        <v-img
                            :src="require('@/assets/img/home.svg')"
                            :lazy-src="require('@/assets/img/home.svg')"
                            width="100%"
                        >
                            <template v-slot:placeholder>
                                <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                                >
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                        <h2 class="google-font  mb-5" >Login Panel for Aura Admin</h2>
                        <v-text-field
                            label="Email"
                            v-model="email"
                            type="email"
                            outlined
                        ></v-text-field>
                        <v-text-field
                            type="password"
                            v-model="password"
                            label="Password"
                            outlined
                        ></v-text-field>

                        <v-btn class="primary" @click="login" :loading="isLoading" text>Login</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</v-content>
</template>

<script>
import firebase from '@/firebase';
export default {
    name:"adminLogin",
    data:()=>({
        email:'',
        password:'',
        isLoading:false
    }),
    methods:{
        login(){
            this.isLoading = true;
            firebase.auth.signInWithEmailAndPassword(this.email,this.password).then((user)=>{
                this.loading=false
                this.$router.replace('dashboard')
            }).catch(e=>{
                this.loading=false
                alert('Alert '+e);
            })
            this.loading=false
        }
    }
}
</script>

<style>

</style>