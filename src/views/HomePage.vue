<template>
  <v-main>
    <v-container fluid class="my-0">
      <v-row justify="center" align="center">
        <v-col md="12" lg="11" sm="11" xs="11" class="my-5">
          <HomeStartScreen class="mt-0 mb-15" />
          <whatwedo />
          <AboutCommunity class="mt-5" />
          <featureEvents v-if="showFeatureEventStatus" class="my-15" />
          <partners class="my-15" />
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
