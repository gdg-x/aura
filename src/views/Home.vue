<template>
  <v-content class="ma-0">
    
    <v-container fluid class="">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" sm="11" xs="12" class="">
          <HomeStartScreen/>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-0 my-0" >
      <v-row justify="center" align="center">
        <v-col md="12" sm="11" lg="10" xs="12" class="py-0" :class="this.$vuetify.theme.dark == true?'darkModeContainer':'lightModeContainer'">
          <whatwedo />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 pt-5 my-0" >
      <v-row justify="center" align="center" style="background:#4C4A78" class="py-5 my-0">
        <v-col md="12" lg="10" sm="11" xs="12" class="py-0" >
          <AboutCommunity />
        </v-col>
      </v-row>
    </v-container>

     <v-container fluid class="pa-0 py-2" v-if="checkExistance(config.keysandsecurity.meetup,0)">
      <v-row justify="center" align="center">
        <v-col md="12" sm="11" lg="10" xs="12" class="py-0">
          <events />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-0" v-if="showFeatureEventStatus">
      <v-row justify="center" align="center" class="py-5" :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'">
        <v-col md="12" sm="11" lg="10" xs="12" class="py-0">
          <featureEvents />
        </v-col>
      </v-row>
    </v-container>

     <v-container fluid class="pa-0 py-2 " >
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <partners />
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0 py-2 hidden-md-and-up" >
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <br><br>
        </v-col>
      </v-row>
    </v-container>

  </v-content>
  
</template>

<script>
import service from '@/services/appservices'
import { mapState } from "vuex";

export default {
  name: 'Home',
  components: {
    HomeStartScreen:()=>import('@/components/home/HomeStartScreen'),
    whatwedo:()=>import('@/components/home/WhatWeDo'),
    AboutCommunity:()=>import('@/components/home/AboutCommunity'),
    events:()=>import('@/components/home/Events'),
    featureEvents:()=>import('@/components/home/FeaturesEvents'),
    partners:()=>import('@/components/common/Partners')
  },
  data:()=>({
    showFeatureEventStatus:false
  }),
  mounted(){
    this.getFeaturesEventID();
  },
  computed:{
    ...mapState(["config"])
  },
  methods:{
    getFeaturesEventID(){
      service.getFeaturesEvents().then(res=>{
          (res.success) ?
            (res.data.length>0) ?
              this.showFeatureEventStatus = true :
                this.showFeatureEventStatus = false
            : this.notFound = true
      })
    }
  }
}
</script>

<style scoped>
  .lightModeContainer{
      background-color:#F9F9F9;
      border:1px solid #e0e0e0;
      border-radius:5px
  }
  .darkModeContainer{
      background-color:#292929;
      border:1px solid #212121;
      border-radius:5px
  }
</style>
