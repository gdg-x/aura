<template>
  <v-app-bar app hide-on-scroll fixed clipped-left :class="this.$vuetify.theme.dark == true?'':'white'" :style="
      this.$vuetify.theme.dark ? {boxShadow:'0 2px 6px 0 rgba(0,0,0,.12), inset 0 -1px 0 0 #272727'}
      :{ boxShadow: '0 2px 6px 0 rgba(0,0,0,.12), inset  0 -1px 0 0 #dadce0' }">
    <v-app-bar-nav-icon aria-label="Hamburger Menu" @click="toggleDrawer" class="d-md-none d-lg-none"></v-app-bar-nav-icon>
    <div class="d-flex align-center" v-if="checkExistance(config.generalConfig.toolbarImage, 0)">
      <router-link
        to="/"
        class="google-font"
        style="text-decoration:none;font-size:110%"
        :class="
          this.$vuetify.theme.dark ? 'white--text' : 'grey--text text--darken-2'
        "
      >
        <v-img
          alt="Community Logo"
          class="shrink mr-2"
          contain
          :src="config.generalConfig.toolbarImage"
          transition="scale-transition"
          width="25"
        />
      </router-link>
    </div>
    <v-toolbar-title class="google-font px-0" style="width:280px">
      <router-link
        to="/"
        class="google-font"
        aria-label="Communiy homepage"
        style="text-decoration:none;font-size:110%"
        :class="this.$vuetify.theme.dark?'whiteText':'blackText'"
      >
      {{config.generalConfig.shortName || config.generalConfig.name || ""}}</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-tabs
      :color="this.$vuetify.theme.dark ? 'white' : 'primary'"
      right
      :slider-color="this.$vuetify.theme.dark ? 'white' : 'primary'"
      class="hidden-sm-and-down"
    >
      <v-tab
        aria-label="toolbar links"
        v-for="(link, i) in links.filter((obj) => obj.meta.showToolbar)"
        :key="i"
        :to="link.to"
        class="google-font"
        @click="onClick($event, link)"
        style="text-transform: capitalize;"
        >{{ link.text }}</v-tab
      >
    </v-tabs>

    <offline @detected-condition="handleConnectivityChange"></offline>
    <v-toolbar-title
      v-if="isOffline"
      style="background-color:red;border:1px solid red;border-radius:6px;color:white;font-size:90%"
      class="google-font px-2"
    >Offline</v-toolbar-title>
    <PushNotification class="mr-1" />
    <v-btn icon v-on:click="darkMode" class="ml-1" aria-label="Theme Switch BTN">
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
