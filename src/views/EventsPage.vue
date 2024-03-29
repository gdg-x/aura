<template>
  <v-main>
    <v-container fluid class="pa-0">
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col md="12" lg="11" sm="11" xs="12" class="">
          <!-- Header -->
          <v-container fluid class="my-0 py-0">
            <v-row justify="center" align="center">
              <v-col md="8" sm="7" cols="12">
                <p
                  class="google-font mb-0"
                  style="font-weight: 350; font-size: 200%"
                >
                  <b>Our <span class="aura-text">Events</span> </b>
                </p>
                <p class="google-font mt-0 mb-0" style="font-size: 110%">
                  Questions? Please contact
                  <a
                    style="color: #1565c0; text-decoration: none"
                    class="aura-text"
                    :href="`mailto:${config.generalConfig.email}`"
                    >{{ config.generalConfig.email }}</a
                  >
                </p>
              </v-col>
              <v-col md="4" sm="5" cols="12">
                <v-img
                  width="80%"
                  style="margin: auto"
                  :src="require('@/assets/img/common/events.png')"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
          <!-- Header -->

          <!-- Feature Events -->
          <FeatureEvents class="my-10" />
          <!-- Feature Events -->
        </v-col>
      </v-row>
    </v-container>

    <!-- Past Events -->
    <v-container fluid class="py-2 mt-8 mb-8">
      <v-row justify="center" align="center">
        <v-col md="12" lg="11" sm="11" xs="12" class="py-0">
          <PastEvents />
        </v-col>
      </v-row>
    </v-container>
    <!-- Past Events -->
  </v-main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "EventsPage",
  components: {
    FeatureEvents: () => import("@/components/home/FeaturesEvents"),
    PastEvents: () => import("@/components/events/PastEvents"),
  },
  computed: {
    ...mapState(["config"]),
  },
  data: () => ({}),
};
</script>