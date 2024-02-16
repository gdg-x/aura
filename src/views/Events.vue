<template>
  <v-main>
    <v-container fluid class="pa-0">
      <v-row justify="center" align="center" class="py-0 my-0">
        <v-col md="12" lg="11" sm="11" xs="12" class="">
          <eventsHeader />
          <upcomingMeetupsEvents
            v-if="checkExistance(config.keysandsecurity.meetup, 0)"
          />
          <featureEvents class="my-10" v-else />
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="py-2 mt-8">
      <v-row justify="center" align="center">
        <v-col md="12" lg="11" sm="11" xs="12" class="py-0">
          <pastMeetupsEvents
            v-if="checkExistance(config.keysandsecurity.meetup, 0)"
          />
          <customPastEvents v-else />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "EventsPage",
  components: {
    eventsHeader: () => import("@/components/events/EventHeader"),
    upcomingMeetupsEvents: () => import("@/components/events/UpcomingEvents"),
    pastMeetupsEvents: () => import("@/components/events/PastEvents"),
    featureEvents: () => import("@/components/home/FeaturesEvents"),
    customPastEvents: () => import("@/components/events/CustomPastEvents"),
  },
  computed: {
    ...mapState(["config"]),
  },
  data: () => ({}),
};
</script>