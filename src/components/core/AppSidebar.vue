<template>
  <v-navigation-drawer
    app
    width="100px"
    :color="this.$vuetify.theme.dark ? '#252726' : '#F5F8FC'"
    clipped-left
    floating
    class="text-center"
  >
    <v-avatar
      :color="this.$vuetify.theme.dark ? '#F5F8FC' : '#F5F8FC'"
      size="55"
      class="my-4 mt-5"
    >
      <v-img
        alt="Community Logo"
        class="shrink google-font"
        contain
        :src="config.generalConfig.toolbarImage"
        transition="scale-transition"
        width="65"
      />
    </v-avatar>
    <v-list>
      <v-btn
        depressed
        :color="$vuetify.theme.dark?'#292929':'#F5F8FC'"
        class="px-0 py-8 mb-2"
        style="border-radius: 16px"
        v-for="(link, i) in links.filter((obj) => obj.meta.showToolbar)"
        :key="i"
        @click="onClick($event, link)"
        :to="link.to"
      >
        <div>
          <v-icon style="display: block" size="24" class="mb-1">{{
            link.icon
          }}</v-icon>
          <span
            style="
              font-size: 10px;
              text-transform: capitalize;
              font-weight: 600;
            "
            class="mb-0 mt-4 google-font"
            >{{ link.text }}</span
          >
        </div>
      </v-btn>
    </v-list>
    <template v-slot:append>
      <v-btn
        icon
        v-on:click="darkMode"
        class="pa-4 my-5"
        x-large
        aria-label="Theme Switch BTN"
      >
        <v-icon v-if="$vuetify.theme.dark">mdi-brightness-7</v-icon>
        <v-icon v-else>mdi-brightness-4</v-icon>
      </v-btn>
    </template>
  </v-navigation-drawer>
</template>

<script>
// import offline from "v-offline";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "AppToolbar",
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
