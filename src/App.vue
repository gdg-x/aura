<template>
  <v-app>
    <Toolbar />
    <Drawer />
    <v-content class="fill-height"  v-if="isLoading">
      <v-container class="fill-height">
        <v-row justify="center" align="center" class>
          <v-col cols="12" md="12" class="text-center">
            <v-progress-circular :width="5" :size="50" color="indigo" indeterminate></v-progress-circular>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Views v-else/>
    <Footer />
  </v-app>
</template>

<script>
import Toolbar from "@/components/core/Toolbar";
import Drawer from "@/components/core/Drawer";
import Views from "@/components/core/Views";
import Footer from "@/components/core/Footer";
import service from "@/services/appservices";
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    Toolbar,
    Drawer,
    Views,
    Footer
  },
  data: () => ({
    isLoading: true,
    refreshing: false,
    registration: null,
  }),
  computed: {
    ...mapState(["config"])
  },
  created() {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener("swUpdated", this.showRefreshUI, { once: true });
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (this.refreshing) return;
      this.refreshing = true;
      window.location.reload();
    });
  },
  beforeCreate() {
    localStorage.getItem("darkMode") == "true"
      ? (this.$vuetify.theme.dark = true)
      : (this.$vuetify.theme.dark = false);
  },
   mounted() {
    if (
      Object.keys(this.config.generalConfig).length <= 0 ||
      Object.keys(this.config.keysandsecurity).length <= 0 ||
      Object.keys(this.config.footerConfig).length <= 0
    )
      this.getData();
  },
  methods: {
    ...mapMutations([
      "setGeneralConfig",
      "setKeysAndSecutityConfig",
      "setFooterConfig"
    ]),
    showRefreshUI(e) {
      this.registration = e.detail;
      this.snackBtnText = "Refresh";
      this.snackWithBtnText = "New version available!";
      this.snackWithButtons = true;
    },
    refreshApp() {
      this.snackWithButtons = false;
      if (!this.registration || !this.registration.waiting) {
        return;
      }
      this.registration.waiting.postMessage("skipWaiting");
    },
    getData() {
      this.isLoading = true;
      service.getAllConfig().then(res => {
        if (res.success) {
          console.log(res);
          res.data.forEach(ele => {
            if (ele.name == "footer") this.setFooterConfig(ele.data.links);
            else if (ele.name == "general") this.setGeneralConfig(ele.data);
            else if (ele.name == "keysandsecurity")
              this.setKeysAndSecutityConfig(ele.data);
          });
          this.isLoading = false;
        }
      });
    }
  }
};
</script>
