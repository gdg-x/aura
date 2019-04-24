<template>
  <v-app class="white">

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
          flat
          color="#00f500"
          @click.native="refreshApp"
        >
          {{ snackBtnText }}
        </v-btn>
        <v-btn
          icon
          @click="snackWithButtons = false"
        >
          <v-icon>close</v-icon>
        </v-btn>
    </v-snackbar>


    <CoreToolbar/>
    <CoreDrawer/>
    <CoreView/>
    
    <CoreFooter/>
    <BottomNav/>
  </v-app>
</template>

<script>
import CoreDrawer from '@/components/common/Drawer'
import CoreToolbar from '@/components/common/Toolbar'
import CoreFooter from '@/components/common/Footer'
import CoreView from '@/components/common/View'
import BottomNav from '@/components/common/BottomNav'

export default {
  name: 'App',
  components: {
    CoreDrawer,
    CoreToolbar,
    CoreFooter,
    CoreView,
    BottomNav
  },
  data () {
    return {
      refreshing: false,
      registration: null,
      snackBtnText: '',
      snackWithBtnText: '',
      snackWithButtons: false,
      timeout: 6000,
      //
    }
  },
  created() {
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
    },
  }
  

  
}
</script>

<style scoped>
/* Provide better right-edge spacing when using an icon button there. */
.snack >>> .v-snack__content {
  padding-right: 16px;
}
</style>
