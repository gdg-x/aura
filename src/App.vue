<template>
  <v-app class="hidden-x">
    <v-snackbar v-model="snackWithButtons" :timeout="timeout" bottom left class="snack">
      {{ snackWithBtnText }}
      <v-spacer />
      <v-btn dark text color="#00f500" @click.native="refreshApp">{{ snackBtnText }}</v-btn>
      <v-btn icon @click="snackWithButtons = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <Toolbar v-if="!noData && !$route.meta.isEvent"/>
    <Drawer v-if="!noData && !$route.meta.isEvent"/>
    <BottomNav v-if="!noData && !$route.meta.isEvent"/>
    <v-content class="" v-if="isLoading">
      <v-container class="fill-height">
        <v-row justify="center" align="center" class>
          <v-col cols="12" md="12" class="text-center">
            <v-progress-circular :width="5" :size="50" color="indigo" indeterminate></v-progress-circular>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-content class="" v-if="!isLoading && noData">
      <v-container class="fill-height">
        <v-row justify="center" align="center" class>
          <v-col cols="12" md="12" class="text-center">
            <p class="google-font">Either Your Internet is not Working or Site is not Configured</p>
            <p class="google-font">Follow the Docs for <a target="_blank" href="https://github.com/gdg-x/aura" >Aura</a> & <a target="_blank" href="https://github.com/gdg-x/aura-admin">Aura Admin</a></p>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Views v-if="!isLoading && !noData" />
    <Footer v-if="!noData && !$route.meta.isEvent"/>
  </v-app>
</template>

<script>
import service from "@/services/appservices";
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    Toolbar:()=>import('@/components/core/Toolbar'),
    BottomNav:()=>import('@/components/core/BottomNav'),
    Drawer:()=>import('@/components/core/Drawer'),
    Views:()=>import('@/components/core/Views'),
    Footer:()=>import('@/components/core/Footer')
  },
  data: () => ({
    isLoading: true,
    refreshing: false,
    registration: null,
    noData:false,
    snackBtnText: "",
    snackWithBtnText: "",
    snackWithButtons: false,
    timeout: 15000
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
          res.data.forEach(ele => {
            if (ele.name == "footer") this.setFooterConfig(ele.data.links);
            else if (ele.name == "general") this.setGeneralConfig(ele.data);
            else if (ele.name == "keysandsecurity")
              this.setKeysAndSecutityConfig(ele.data);
          });
          this.noData = false;
          this.isLoading = false;
        }else{
          this.noData = true;
         this.isLoading = false; 
        }
      });
    }
  }
};
</script>
<style>
.hidden-x{
  overflow-x: hidden
}
</style>
