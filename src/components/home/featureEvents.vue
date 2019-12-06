<!--<template>
  <v-container fluid v-if="featureEventData" class="mb-1">
    <v-row align="center" justify="center">
      <v-col cols="12" md="12" lg="12" sm="12" class="mb-0">
        <p class="google-font mb-0 mt-0" style="font-weight: 350;font-size:180%">
          <b>
            Our
            <span style="color: #1a73e8;">Feature Training</span>
            &
            <span style="color: #1a73e8;">Events</span>
          </b>
        </p>-->
        <!-- <p class="google-font mb-0" style="font-size:180%">Our Feature Event & Meetup</p> -->
        <!-- <p
          class="google-font mt-0 mb-0"
          style="font-size:95%"
        >Events are listed in reverse chronological order by date.</p>
      </v-col>
      <v-col cols="12" md="12" lg="12" sm="12" class="mt-0 pt-0 pa-0">
        <v-container fluid class="py-0 my-0">
          <v-row class="py-0 my-0">
            <v-col
              v-for="(item,i) in featureEventData"
              :key="i"
              md="3"
              lg="3"
              sm="6"
              cols="12"
              class="pa-2"
            >
              <featureEventCard :data="{data:item}" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template> -->

<script>
import featureEvent from "@/assets/data/featureEvent";
import featureEventCard from "@/components/common/card/featureEventCard";
export default {
  name: "App",
  components: {
    featureEventCard
  },
  data: () => ({
    featureEventData: featureEvent
  }),
  mounted() {},
  methods: {
    getImgUrl(url) {
      if (url.length > 0) {
        return require("@/assets/img/what-we-do/" + url);
      } else {
        return require("@/assets/img/what-we-do/notFound.png");
      }
    }
  }
};
</script>
