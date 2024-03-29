<template>
  <v-app-bar
    app
    fixed
    clipped
    class="mx-sm-6 mx-md-auto px-0"
    :color="this.$vuetify.theme.dark ? 'black' : 'white'"
    hide-on-scroll
    flat
  >
    <v-app-bar-nav-icon
      aria-label="Hamburger Menu"
      @click="toggleDrawer"
      class="d-lg-none"
    ></v-app-bar-nav-icon>
    <v-spacer></v-spacer>

    <v-chip
      style="height: 40px; border-radius: 25px"
      class="px-5"
      to="/"
      :color="$vuetify.theme.dark ? '#252726' : '#F5F7F7'"
    >
      <v-avatar
        :color="this.$vuetify.theme.dark ? '#999999' : '#F5F7F7'"
        size="60"
        class="mr-2"
      >
        <v-img
          alt="Community Logo"
          class="shrink google-font"
          contain
          :src="config.generalConfig.toolbarImage"
          transition="scale-transition"
          width="65"
      /></v-avatar>
      {{config.generalConfig.shortName || config.generalConfig.name || ""}}
    </v-chip>

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
  </v-app-bar>
</template>

<script>
import offline from "v-offline";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "AppSideToolbar",
  components: {
    offline,
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
