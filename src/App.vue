<template>
  <v-app>
    <Toolbar/>
    <Drawer/>
    <Views/>  
  </v-app>
</template>

<script>
import Toolbar from '@/components/core/Toolbar'
import Drawer from '@/components/core/Drawer'
import Views from '@/components/core/Views'


export default {
  name: 'App',
  components: {
    Toolbar,
    Drawer,
    Views
  },

  data: () => ({
    //
  }),
};
</script>
