<template>
  <v-main>
    <v-container fluid class="my-0">
      <v-row justify="center" align="center">
        <v-col md="12" lg="11" sm="11" xs="12" class="my-5">
          <HomeStartScreen />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="py-0 my-5">
      <v-row justify="center" align="center">
        <v-col md="12" sm="11" lg="11" xs="12">
          <whatwedo />
          <AboutCommunity class="mt-5" />
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-container fluid class="pa-0 my-0">
      <v-row
        justify="center"
        align="center"
      >
        <v-col md="12" lg="11" sm="11" xs="12" class="px-8">
          
        </v-col>
      </v-row>
    </v-container> -->

    <!-- <v-container
      fluid
      class="pa-0 py-0"
      v-if="checkExistance(config.keysandsecurity.meetup, 0)"
    >
      <v-row justify="center" align="center">
        <v-col md="12" sm="11" lg="10" xs="12" class="py-0">
          <events />
        </v-col>
      </v-row>
    </v-container> -->

    <v-container fluid class="pa-0 py-0" v-if="showFeatureEventStatus">
      <v-row
        justify="center"
        align="center"
        class="py-5"
      >
        <v-col md="12" sm="11" lg="11" xs="12" class="py-5 pb-10">
          <featureEvents />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-2 mb-md-10 mb-sm-10">
      <v-row justify="center" align="center">
        <v-col md="12" lg="11" xs="12" class="py-0 px-5">
          <partners />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import service from "@/services/appservices";
import { mapState } from "vuex";

export default {
  name: "HomePage",
  components: {
    HomeStartScreen: () => import("@/components/home/HomeStartScreen"),
    whatwedo: () => import("@/components/home/WhatWeDo"),
    AboutCommunity: () => import("@/components/home/AboutCommunity"),
    featureEvents: () => import("@/components/home/FeaturesEvents"),
    partners: () => import("@/components/common/Partners"),
  },
  data: () => ({
    showFeatureEventStatus: false,
  }),
  mounted() {
    this.getFeaturesEvent();
  },
  computed: {
    ...mapState(["config"]),
  },
  methods: {
    getFeaturesEvent() {
      service.getFeaturesEvents().then((res) => {
        res.success
          ? res.data.length > 0
            ? (this.showFeatureEventStatus = true)
            : (this.showFeatureEventStatus = false)
          : (this.notFound = true);
      });
    },
  },
};
</script>

<style scoped>
.lightModeContainer {
  background-color: #f1f2f3;
  border-radius: 12px;
}
.darkModeContainer {
  background-color: #292929;
  /* border:1px solid #212121; */
  border-radius: 12px;
}
</style>
