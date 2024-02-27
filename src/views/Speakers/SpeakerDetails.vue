<template>
  <v-main>
    <v-container fluid class="pa-0"> 
        <v-row justify="center" align="center">
          <v-col md="12" sm="11" lg="11" xs="12" class="py-0 mb-10">
            <SpeakerMobile class="hidden-sm-and-up pa-0"/>
            <SpeakerDesktop class="d-none d-sm-block pa-0"/>
          </v-col>
        </v-row>
      </v-container>
  </v-main>
</template>

<script>
export default {
  name: "SpeakerPage",
  inject: ["theme"],
  components: {
      SpeakerDesktop:()=>import('@/components/speakers/SpeakerDesktop'),
      SpeakerMobile:()=>import('@/components/speakers/SpeakerMobile')
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