<template>
  <v-toolbar app color="white" height="55px" scroll-off-screen>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer" />

    <v-toolbar-title class="ml-0 pl-1 mr-1">
      <router-link
        :to="{ name: 'home'}"
        class="google-font"
        style="text-decoration:none; color: rgba(0,0,0,.87);"
      >{{ChapterDetails.ChapterName}}</router-link>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      v-for="(link, i) in links"
      :key="i"
      :to="link.to"
      class="ml-0 google-font hidden-sm-and-down"
      style="text-transform: capitalize;"
      flat
      @click="onClick($event, link)"
    >{{ link.text }}</v-btn>
    <v-btn
      v-if="!user.loggedIn"
      class="ml-0 google-font hidden-sm-and-down"
      style="text-transform: capitalize;"
      flat
      @click="signin"
    >Signin</v-btn>
    <Menu v-else :userData="user.data" @userLogout="logout" />
  </v-toolbar>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
import Menu from "../helper/Menu";
// Utilities
import { mapGetters, mapMutations } from "vuex";
import firebase from "firebase";

export default {
  data() {
    return {
      ChapterDetails: ChapterDetails,
      menu: false
    };
  },
  components: { Menu },
  computed: {
    ...mapGetters(["links", "user"])
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
    signin() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // token needs to be set in localStorage
          var token = result.credential.accessToken;

          var user = result.user;

          //will see if we need to manually set state. Otherwise main.js file will set it
          // this.setLoggedIn(true);
          // this.setUser(user);
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;

          alert(error);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          //will see if we need to manually set state. Otherwise main.js file will set it
          // this.setLoggedIn(false);
        })
        .catch(function(error) {
          alert(error);
        });
    }
  }
};
</script>