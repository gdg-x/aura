<template>
  <v-app-bar app fixed clipped-left :class="this.$vuetify.theme.dark == true?'':'white'">
    <v-app-bar-nav-icon @click="toggleDrawer" class="d-md-none d-lg-none"></v-app-bar-nav-icon>
    <v-toolbar-title class="google-font px-0">
      <router-link
        to="/"
        class="google-font"
        style="text-decoration:none;font-size:110%"
        :class="this.$vuetify.theme.dark?'whiteText':'blackText'"
      >{{config.generalConfig.name || ""}}</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <div v-for="(link, i) in links" :key="i">
      <v-btn
        :key="i"
        :to="link.to"
        v-if="link.meta.showToolbar"
        class="ml-2 google-font hidden-sm-and-down"
        style="text-transform: capitalize;"
        text
        @click="onClick($event, link)"
      >{{ link.text }}</v-btn>
    </div>

    <offline @detected-condition="handleConnectivityChange"></offline>
    <v-toolbar-title
      v-if="isOffline"
      style="background-color:red;border:1px solid red;border-radius:6px;color:white;font-size:90%"
      class="google-font px-2"
    >Offline</v-toolbar-title>
    <PushNotification class="mx-1" />
    <v-btn icon v-on:click="darkMode" class="ml-2">
      <v-icon v-if="this.$vuetify.theme.dark">mdi-brightness-7</v-icon>
      <v-icon v-else>mdi-brightness-4</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import offline from "v-offline";
import PushNotification from "@/components/core/PushNotifications";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Toolbar",
  components: {
    offline,
    PushNotification
  },
  data: () => ({
    isOffline: false
  }),
  computed: {
    ...mapState(["config"]),
    ...mapGetters(["links"])
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
    darkMode() {
      let metaThemeColor = document.querySelector("meta[name=theme-color]");

      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (localStorage)
        localStorage.setItem("darkMode", this.$vuetify.theme.dark);
      if (this.$vuetify.theme.dark) {
        metaThemeColor.setAttribute("content", "#212121");
      } else {
        metaThemeColor.setAttribute("content", "#0277bd");
      }
    },
    handleConnectivityChange(status) {
      if (status === true) {
        this.isOffline = false;
      } else {
        this.isOffline = true;
      }
    }
  }
};
</script>
<style scoped>
  .whiteText{
    color:white
  } 
  .blackText{
    color: rgba(0,0,0,.87);
  } 
</style>
