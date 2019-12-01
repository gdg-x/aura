<template>
  <v-content>
    <v-container class="mt-5" fill-height>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-col cols="12" md="4">
              <p class="google-font" style="font-size:100%">Login Panel for GDG-X</p>
              <v-text-field label="Email" v-model="email" type="email" outlined></v-text-field>
              <v-text-field type="password" v-model="password" label="Password" outlined></v-text-field>

              <v-btn class="primary" @click="login" :loading="isLoading" text>Login</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import firebase from "@/firebase";
export default {
  name: "adminLogin",
  data: () => ({
    email: "",
    password: "",
    isLoading: false
  }),
  methods: {
    login() {
      this.isLoading = true;
      firebase.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.loading = false;
          this.$router.replace("dashboard");
        })
        .catch(e => {
          this.loading = false;
          alert("Alert " + e);
        });
    }
  }
};
</script>

<style>
</style>