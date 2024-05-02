<template>
  <v-container fluid class="mb-1">
    <v-row align="center" justify="center" class>
      <v-col cols="12" md="12" lg="12" sm="12" class="mb-0">
        <p
          class="google-font mb-0 mt-0"
          style="font-weight: 350; font-size: 180%"
        >
          <b> Our Feature Events </b>
        </p>
        <p class="google-font mt-0 mb-0" style="font-size: 95%">
          Events are listed in reverse chronological order by date.
        </p>
      </v-col>
      <v-col cols="12" md="12" lg="12" sm="12" class="mt-0 pt-0 pa-0">
        <v-container fluid class="py-0 my-0">
          <v-row class="py-0 my-0" v-if="loading && notFound == false">
            <v-col
              v-for="i in 4"
              :key="i"
              md="3"
              lg="3"
              sm="6"
              cols="6"
              class="pa-2"
            >
              <v-sheet
                :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                class
              >
                <v-skeleton-loader
                  class="mx-auto"
                  type="article"
                ></v-skeleton-loader>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row class="py-0 my-0" v-else-if="notFound">
            <v-col
              md="3"
              lg="3"
              sm="6"
              cols="12"
              :class="
                $vuetify.theme.dark
                  ? 'darkModeCardFeatureEvent'
                  : 'lightModeCardFeatureEvent'
              "
              class="pa-4 px-5 mx-3"
            >
              <p class="google-font my-2">Not Found</p>
            </v-col>
          </v-row>
          <v-row v-else class="py-0 my-0 px-2">
            <v-col
              v-for="(item, i) in featureEvendsData"
              :key="i"
              md="3"
              lg="3"
              sm="6"
              cols="6"
              class="pa-1"
            >
              <!-- <featureEventCard :data="item" /> -->
              <EventCardVue :data="item" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import service from "@/services/appservices";
export default {
  name: "App",
  inject: ["theme"],
  components: {
    // featureEventCard: () => import("@/components/home/FeatureEventCard")
    EventCardVue: () => import("@/components/events/EventCard"),
  },
  data: () => ({
    loading: true,
    notFound: false,
    FeaturesEventID: [],
    AllCustomEvents: [],
    eData: [],
    featureEvendsData: [],
  }),
  mounted() {
    this.getFeaturesEventID();
  },
  methods: {
    getAllCustomEvents() {
      this.featureEvendsData = [];
      service.getAllCustomEvents().then((res) => {
        if (res.success) {
          this.loading = false;
          this.AllCustomEvents = res.data;

          this.FeaturesEventID.map((res) => {
            this.AllCustomEvents.map((obj) => {
              if (obj.id == res) {
                this.featureEvendsData.push(obj);
              }
            });
          });
          this.featureEvendsData = this.featureEvendsData.sort((a, b)=> new Date(b.date)- new Date(a.date))
        }
      });
    },

    getFeaturesEventID() {
      this.loading = true;
      service.getFeaturesEvents().then((res) => {
        if (res.success) {
          this.notFound = false;
          this.FeaturesEventID = res.data;
          if (this.FeaturesEventID.length > 0) this.getAllCustomEvents();
          else {
            this.notFound = true;
            this.loading = false;
          }
        } else {
          this.notFound = true;
          this.loading = false;
        }
      });
    },
  },
};
</script>