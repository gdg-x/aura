<template>
  <v-container fluid>
    <v-snackbar v-model="errorAlert" bottom left>
      {{ errorMsg }}
      <v-btn color="pink" text @click="errorAlert = false">Close</v-btn>
    </v-snackbar>

    <v-row
      align="center"
      justify="center"
      :style="{'background-image':'url('+require('@/assets/img/svg/bg.svg')+')'}"
      style="background-position:right"
    >
      <v-col cols="12" md="12" lg="12" sm="12" class>
        <p class="google-font mb-0" style="font-size:150%;color: #1a73e8;">Upcoming Events</p>
        <p
          class="google-font mt-0"
          style="font-size:95%"
        >Our events are open to newbies, developers, managers, and organizations who are interested in Google's technologies or use them as part of their projects.</p>
        <v-row v-if="showLoader">
          <v-col md="3" lg="3" sm="6" cols="12" class="pa-2" v-for="(item,i) in 3" :key="i">
            <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class>
              <v-skeleton-loader class="mx-auto" type="article"></v-skeleton-loader>
            </v-sheet>
          </v-col>
        </v-row>

        <v-row v-else>
          <v-col
            md="3"
            lg="3"
            sm="6"
            cols="12"
            class="pa-2"
            v-for="(item,i) in eventsData"
            :key="i"
          >
            <v-slide-y-reverse-transition>
              <upcomingEventCard v-show="showData" :data="{data:item}" />
            </v-slide-y-reverse-transition>
          </v-col>
        </v-row>

        <v-row v-if="notFoundUpcomingEventFlag" class="pa-2">
          <v-col
            md="3"
            lg="3"
            sm="6"
            cols="12"
            class="pa-3"
            :class="$vuetify.theme.dark == true?'darkModeCard':'card-light'"
          >
            <p class="google-font px-2 mb-0" style="font-size:140%">
              <v-icon>mdi-calendar-blank</v-icon>
              <br />No Upcoming Events!
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import service from "@/services/appservices";
import { mapState } from "vuex";
export default {
  name: "App",
  inject: ["theme"],
  components: {
    upcomingEventCard:()=>import('@/components/events/UpcomingEventCard')
  },
  computed: {
    ...mapState(["config"])
  },
  data: () => ({
    eventsData: [],
    showLoader: true,
    showData: false,
    notFoundUpcomingEventFlag: false,
    errorAlert: false,
    errorMsg: ""
  }),
  mounted() {
    this.getMeetupUrl();
  },
  methods: {
    getMeetupUrl() {
      service
        .getAllUpcomingMeetupsEvents(this.config.keysandsecurity.meetup)
        .then(res => {
          if (res.success) {
            if (res.data.length > 0) {
              this.showLoader = false;
              this.showData = true;
              this.eventsData = res.data;
            } else {
              this.showLoader = false;
              this.notFoundUpcomingEventFlag = true;
            }
          } else {
            this.showLoader = false;
          }
        })
        .catch(e => {
          this.showLoader = false;
          this.errorMsg = "Issue found with " + e;
          this.errorAlert = true;
          this.notFoundUpcomingEventFlag = true;
        });
    }
  }
};
</script>