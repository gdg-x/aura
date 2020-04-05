<template>
  <v-content class="px-0 mx-1">
    <v-container fluid class="pa-0"> 
        <!-- <speakerMobile class="hidden-sm-and-up pa-0"/> -->
        <SpeakerDesktop class="d-none d-sm-block pa-0"/>
      </v-container>
  </v-content>
</template>

<script>
// import service from "@/services/appservices";
import SpeakerDesktop from '@/components/speakers/SpeakerDesktop';
export default {
  name: "Speaker",
  inject: ["theme"],
  components: {
      SpeakerDesktop
  },
  data: () => ({
    loader: true,
    SpeakersData: [],
    ErrorMsg: ""
  }),
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped>
.darkbg {
  /* background: #1F1A24 */
}
</style>