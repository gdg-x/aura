<template>
  <v-app class="pa-0 ma-0">
    <v-snackbar
        v-model="snackWithButtons"
        :timeout="timeout"
        bottom
        left
        class="snack"
      >
        {{ snackWithBtnText }}
        <v-spacer />
        <v-btn
          dark
          text
          color="#00f500"
          @click.native="refreshApp"
        >
          {{ snackBtnText }}
        </v-btn>
        <v-btn
          icon
          @click="snackWithButtons = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
    </v-snackbar>

    <AuraToolbar/>
    <AuraDrawer />
    
    <AuraView class="" />
    <AuraFooter/>
    <AuraBottomNav class="d-flex d-sm-none" />
  </v-app>
</template>

<script>
import AuraToolbar from './components/core/Toolbar'
import AuraDrawer from './components/core/Drawer'
import AuraBottomNav from './components/core/BottomNav'
import AuraView from './components/core/View'
import AuraFooter from './components/core/Footer'

export default {
  name: 'App',
  components: {
    AuraToolbar,
    AuraDrawer,
    AuraView,
    AuraBottomNav,
    AuraFooter
  },
  data: () => ({
    refreshing: false,
    registration: null,
    snackBtnText: '',
    snackWithBtnText: '',
    snackWithButtons: false,
    timeout: 7000,
  }),
  created(){
    
     // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
        this.refreshing = true;
      window.location.reload();
    });
  },
  methods:{
    showRefreshUI(e) {
      this.registration = e.detail;
      this.snackBtnText = 'Refresh';
      this.snackWithBtnText = 'New version available!';
      this.snackWithButtons = true;
    },
    refreshApp() {
      this.snackWithButtons = false;
      if (!this.registration || !this.registration.waiting) { return; }
      this.registration.waiting.postMessage('skipWaiting');
    }
  }
};
</script>

<style scoped>
/* Provide better right-edge spacing when using an icon button there. */
.snack >>> .v-snack__content {
  padding-right: 16px;
}
</style>