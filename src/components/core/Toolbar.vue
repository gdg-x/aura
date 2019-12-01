<template>
  <v-app-bar app fixed class>
    <v-app-bar-nav-icon class="d-md-none d-lg-none" @click="toggleDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title class="px-0">
      <v-container fluid>
        <v-row align="center">
          <v-col class="px-0 hidden-sm-and-down">
            <v-img
              :src="require('@/assets/img/gdg.png')"
              :lazy-src="require('@/assets/img/gdg.png')"
              width="4vh"
            ></v-img>
          </v-col>
          <v-col class="pl-2">
            <router-link
              :to="{ name: 'home'}"
              class="google-font"
              style="text-decoration:none;font-size:110%"
              :class="this.$vuetify.theme.dark?'whiteText':'blackText'"
            >{{communitydata.CommunityName}}</router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar-title>

    <div class="flex-grow-1"></div>
    <v-btn
      v-for="(link, i) in links"
      :key="i"
      :to="link.to"
      v-if="link.meta.showToolbar"
      class="ml-2 google-font hidden-sm-and-down"
      style="text-transform: capitalize;"
      text
      @click="onClick($event, link)"
    >{{ link.text }}</v-btn>
    <PushNotification />
    <v-btn icon v-on:click="darkMode" class="ml-2">
      <v-icon v-if="this.$vuetify.theme.dark">mdi-brightness-7</v-icon>
      <v-icon v-else>mdi-brightness-4</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import communitydata from "@/assets/data/communitydata.json";
import PushNotification from "@/components/core/PushNotifications";
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      communitydata: communitydata
    };
  },
  components: {
    PushNotification
  },
  computed: {
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
    }
  }
};
</script>

<style scoped>
.whiteText {
  color: white;
}
.blackText {
  color: rgba(0, 0, 0, 0.87);
}
</style>
