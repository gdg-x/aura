<template>
  <v-app>
    <Toolbar/>
    <Drawer/>
    <Views/>  
    <Footer/>
  </v-app>
</template>

<script>
import Toolbar from '@/components/core/Toolbar'
import Drawer from '@/components/core/Drawer'
import Views from '@/components/core/Views'
import Footer from '@/components/core/Footer'
// import service from '@/services/appservices'

export default {
  name: 'App',
  components: {
    Toolbar,
    Drawer,
    Views,
    Footer
  },
  beforeCreate(){
      (localStorage.getItem('darkMode') == 'true')?this.$vuetify.theme.dark  = true:this.$vuetify.theme.dark  = false;
  },
  mounted(){
    console.log('Calling aapppp')
  },
  data: () => ({
    //
  }),
  
};
</script>
