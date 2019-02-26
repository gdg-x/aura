<template>
  <v-app class="white">

    <CoreToolbar/>
    <CoreDrawer/>
    <CoreView/>
    <CoreFooter/>
    <BottomNav/>

    <!-- <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content> -->
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
      //
    }
  }
}
</script>
