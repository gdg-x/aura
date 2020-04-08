<template>
  <v-content class="ma-0">
    
    <v-container fluid class="">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-5">
          <HomeStartScreen/>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-2" >
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0 " :class="this.$vuetify.theme.dark == true?'darkModeContainer':'lightModeContainer'">
          <whatwedo />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-5" >
      <v-row justify="center" align="center" style="background:#4C4A78" class="py-5">
        <v-col md="12" lg="10" xs="12" class="py-0" >
          <AboutCommunity />
        </v-col>
      </v-row>
    </v-container>

     <v-container fluid class="pa-0 py-2" >
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <events />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-0" >
      <v-row justify="center" align="center" class="py-4" :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <featureEvents />
        </v-col>
      </v-row>
    </v-container>

     <v-container fluid class="pa-0 py-2" >
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <partners />
        </v-col>
      </v-row>
    </v-container>

  </v-content>
  
</template>

<script>
import HomeStartScreen from '@/components/home/HomeStartScreen'
import whatwedo from '@/components/home/WhatWeDo'
import AboutCommunity from '@/components/home/AboutCommunity'
import events from '@/components/home/Events'
import featureEvents from '@/components/home/FeaturesEvents'
import partners from '@/components/common/Partners'
export default {
  name: 'Home',
  components: {
    HomeStartScreen,
    whatwedo,
    AboutCommunity,
    events,
    featureEvents,
    partners
  },
  mounted(){
  },
  methods:{
     
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
