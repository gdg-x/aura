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
// import service from '@/services/appservices'

export default {
  name: 'App',
  components: {
    Toolbar,
    Drawer,
    Views
  },
  mounted(){
    // service.testfun(23)
    // service.getFeaturesEvents().then(res=>{
    //   console.log(res)
    // }).catch(e=>{
    //   console.log(e)
    // })
  },
  data: () => ({
    //
  }),
  
};
</script>
