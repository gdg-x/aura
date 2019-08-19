<template>
  <v-content class="pa-0">

    <v-container fluid class="my-4">
      <v-layout wrap align-center justify-center row fill-height class="">
        <v-flex xs12 md10 >
          <HomeStartScreen />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="background-color:#F9F9F9" >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <whatWeDo />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="background-color:#4C4A78" >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <AboutGDGChapter />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <eventshowcase />
        </v-flex>
      </v-layout>
    </v-container>
  
    <v-container fluid class="py-5" style="background-color:#F9F9F9">
      <v-layout wrap align-start justify-start row fill-height>
        <v-flex xs12 md10 offset-md1 offset-lg1 >
          <p class="google-font mb-2" style="font-size:150%">Our Feature Event & Meetup</p>
        </v-flex>
        <v-flex xs12 md10 offset-md1 offset-lg1 >
          <featureEvent />
        </v-flex>
      </v-layout>
    </v-container>
    
     <!-- <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <wtmInfo />
        </v-flex>
      </v-layout>
    </v-container> -->

    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <partners />
        </v-flex>
      </v-layout>
    </v-container>

    


  </v-content>
  
</template>

<script>
  import HomeStartScreen from '@/components/home/HomeStartScreen'
  import whatWeDo from '@/components/home/whatWeDo'
  import AboutGDGChapter from '@/components/home/AboutGDGChapter'
  import eventshowcase from '@/components/home/eventshowcase'
  // import wtmInfo from '@/components/home/wtmInfo'
  import partners from '@/components/home/partners'
  import featureEvent from '@/components/home/featureEvent'
  
  export default {
    components: {
      HomeStartScreen,
      whatWeDo,
      AboutGDGChapter,
      eventshowcase,
      // wtmInfo,
      partners,
      featureEvent
    }
  }
</script>
