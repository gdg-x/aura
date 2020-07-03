<template>
  <v-app-bar app fixed clipped-left :class="this.$vuetify.theme.dark == true?'':'white'" :style="
      this.$vuetify.theme.dark ? {boxShadow:'0 2px 6px 0 rgba(0,0,0,.12), inset 0 -1px 0 0 #272727'}
      :{ boxShadow: '0 2px 6px 0 rgba(0,0,0,.12), inset  0 -1px 0 0 #dadce0' }">
    <v-app-bar-nav-icon aria-label="Hamburger Menu" @click="toggleEventDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="google-font px-0" style="width:280px">
      <router-link
        :to="'/events/'+$route.params.id+'/about'"
        class="google-font"
        aria-label="Communiy homepage"
        style="text-decoration:none;font-size:110%"
        :class="this.$vuetify.theme.dark?'whiteText':'blackText'"
      >{{eventName || ""}}</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/events" class="ml-1" aria-label="Theme Switch BTN">
      All Events
    </v-btn>
    <v-btn icon @click="darkMode" class="ml-1" aria-label="Theme Switch BTN">
      <v-icon v-if="this.$vuetify.theme.dark">mdi-brightness-7</v-icon>
      <v-icon v-else>mdi-brightness-4</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
    name:"EventToolBar",
    props:['eventName'],
    methods: {
    ...mapMutations(["toggleEventDrawer"]),
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
    }
}
</script>

<style scoped>
  .whiteText{
    color:white
  } 
  .blackText{
    color: rgba(0,0,0,.87);
  } 
</style>