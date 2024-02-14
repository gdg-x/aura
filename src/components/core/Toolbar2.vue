<template>
  <v-navigation-drawer
    app
    width="90px"
    :color="this.$vuetify.theme.dark ? '#252726' : '#F5F7F7'"
    clipped-left
    floating
    style="border: 0 !important; padding-top: 60px"
    class="text-center"
  >
    <v-list>
      <v-btn
        depressed
        class="px-4 py-8 mb-3"
        style="border-radius: 16px"
        v-for="(link, i) in links.filter((obj) => obj.meta.showToolbar)"
        :key="i"
        @click="onClick($event, link)"
        :to="link.to"
      >
        <div>
          <v-icon style="display: block" size="20">{{ link.icon }}</v-icon>
          <span style="font-size: 60%" class="mb-0 mt-2">{{ link.text }}</span>
        </div>
      </v-btn>
    </v-list>
    <template v-slot:append>
      <v-btn
        icon
        v-on:click="darkMode"
        class="pa-4 my-5"
        aria-label="Theme Switch BTN"
      >
        <v-icon v-if="$vuetify.theme.dark">mdi-brightness-7</v-icon>
        <v-icon v-else>mdi-brightness-4</v-icon>
      </v-btn>
      <!-- <div class="pa-3">
          <p class="google-font my-0" style="color: #616161; font-size: 80%">
            Version: 0.0.2 -
            <a
              href="https://github.com/gdg-x/aura-admin/"
              target="_blank"
              style="text-decoration: none"
              >Aura</a
            >
          </p>
        </div> -->
    </template>
  </v-navigation-drawer>
  <!-- <v-app-bar
    app
    fixed
    class="mt-md-4 mt-sm-4 mx-sm-6 mx-md-auto px-3"
    :class="this.$vuetify.theme.dark == true ? '' : 'white'"
    style="max-width: 1024px !important;
      margin-left: auto;
      margin-right: auto;
      border-radius: 15px;"
    :style="
      this.$vuetify.theme.dark
        ? { boxShadow: '0 2px 6px 0 rgba(0,0,0,.12), inset 0 -1px 0 0 #272727' }
        : {
            boxShadow: '0 2px 6px 0 rgba(0,0,0,.12), inset  0 -1px 0 0 #dadce0',
          }
    "
  >
    <v-app-bar-nav-icon
      aria-label="Hamburger Menu"
      @click="toggleDrawer"
      class="d-md-none d-lg-none"
    ></v-app-bar-nav-icon>
    <div
      class="d-flex align-center"
      v-if="checkExistance(config.generalConfig.toolbarImage, 0)"
    >
      <router-link
        to="/"
        class="google-font"
        style="text-decoration: none; font-size: 110%"
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
    <v-toolbar-title class="google-font px-0" style="width: 280px">
      <router-link
        to="/"
        class="google-font"
        aria-label="Communiy homepage"
        style="text-decoration: none; font-size: 110%"
        :class="this.$vuetify.theme.dark ? 'whiteText' : 'blackText'"
      >
        {{
          config.generalConfig.shortName || config.generalConfig.name || ""
        }}</router-link
      >
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down mr-3">
      <v-btn
        v-for="(link, i) in links.filter((obj) => obj.meta.showToolbar)"
        :key="i"
        class="google-font ml-3"
        rounded
        small
        depressed
        text
        style="text-transform: capitalize"
        @click="onClick($event, link)"
        :to="link.to"
        :color="$vuetify.theme.dark ? '' : 'blue darken-3'"
        >{{ link.text }}</v-btn
      >
    </div>

    <offline @detected-condition="handleConnectivityChange"></offline>
    <v-toolbar-title
      v-if="isOffline"
      style="
        background-color: red;
        border: 1px solid red;
        border-radius: 6px;
        color: white;
        font-size: 90%;
      "
      class="google-font px-2"
      >Offline</v-toolbar-title
    >
    <v-btn
      icon
      v-on:click="darkMode"
      class="ml-1"
      aria-label="Theme Switch BTN"
    >
      <v-icon v-if="this.$vuetify.theme.dark">mdi-brightness-7</v-icon>
      <v-icon v-else>mdi-brightness-4</v-icon>
    </v-btn>
  </v-app-bar> -->
</template>

<script>
// import offline from "v-offline";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Toolbar",
  components: {
    // offline,
  },
  data: () => ({
    isOffline: false,
  }),
  computed: {
    ...mapState(["config"]),
    ...mapGetters(["links"]),
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
    },
  },
};
</script>
<style scoped>
.whiteText {
  color: white;
}
.blackText {
  color: rgba(0, 0, 0, 0.87);
}

/* .aura-navbar-sidenav {
  border-radius: 16px;
  padding: 10px 17px;
}

.btn-active-light-side-navbar {
  border-radius: 16px;
  background-color: #d8dce2;
  padding: 10px 17px;
} */
</style>
