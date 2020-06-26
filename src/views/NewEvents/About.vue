<template>
  <v-content>
    <v-container class="py-0 my-0 mt-0">
      <v-row class="py-0 my-0" align="center" justify="center">
        <v-col cols="12" md="12" class="pa-0">
          <v-img
            :src="getImgUrl(eventDetails.image, 'eventbanner.jpg')"
            :lazy-src="getImgUrl(eventDetails.image, 'eventbanner.jpg')"
            width="100%"
            cover
            style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,1)"
            height="250px"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            <v-card-title
              class="fill-height align-end google-font pb-5 white--text"
            >
              <div>
                <p class="my-0" style="font-size:150%">
                  {{ eventDetails.name }}
                </p>
                <!-- {{config}} -->
                <!-- <br> -->
                <p class="my-0 my-n1" style="font-size:80%">
                  {{ config.generalConfig.name }}
                </p>
                <!-- <br> -->
                <p class="my-0 my-n2" style="font-size:70%">
                  {{ eventDetails.date }}
                </p>
              </div>
            </v-card-title>
            <v-layout
              slot="placeholder"
              fill-height
              align-center
              justify-center
              ma-0
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-layout>
          </v-img>
        </v-col>
        <v-col cols="12" md="12" class="pa-0 mt-5">
          <v-container>
            <h1
              :class="
                this.$vuetify.theme.dark
                  ? 'white--text'
                  : 'grey--text text--darken-3'
              "
              class="google-font mb-0"
              style="font-size:180%"
            >
              {{ eventDetails.name }} Details
            </h1>
            <p class="google-font mb-3" style="font-size:110%">{{ eventDetails.des }}</p>

            <span v-for="(item, i) in eventDetails.hashtags" :key="i">
              <v-chip
                class="mr-1"
                :href="'https://twitter.com/hashtag/' + item"
                target="_blank"
                label
                >#{{ item }}</v-chip
              >
            </span>

            <p class="google-font mb-0 mt-3">
              <b>Date:</b>
              {{ eventDetails.date }}
            </p>
            <p class="google-font my-0">
              <b>Time:</b>
              {{ eventDetails.time.starttime }} -
              {{ eventDetails.time.endtime }}
            </p>
            <p class="google-font my-0">
              <b>Venue: </b>
              <a
                target="_blank"
                style="text-decoration:none"
                :href="eventDetails.venue.googlemapsurl"
                >{{ eventDetails.venue.name }}</a
              >
            </p>

            <div class="mt-4 pb-5">
              <!-- <p class="google-font mb-0">
              <b>Important Links</b>
            </p> -->
              <v-btn
                color="primary"
                dark
                target="_blank"
                v-if="eventDetails.links.registration"
                :href="eventDetails.links.registration"
                class="mr-1 mb-1"
                label
                >Registration</v-btn
              >
              <v-btn
                color="pink"
                dark
                target="_blank"
                v-if="eventDetails.links.meetup"
                :href="eventDetails.links.meetup"
                class="mr-1 mb-1"
                label
                >Meetup</v-btn
              >

              <v-btn
                color="orange"
                dark
                target="_blank"
                v-if="eventDetails.links.callforspeaker"
                :href="eventDetails.links.callforspeaker"
                class="mr-1 mb-1"
                label
                >Call For Speakers</v-btn
              >

              <v-btn
                color="indigo"
                dark
                target="_blank"
                v-if="eventDetails.links.facebook"
                :href="eventDetails.links.facebook"
                class="mr-1 mb-1"
                label
                >Facebook</v-btn
              >

              <v-btn
                color="success"
                dark
                target="_blank"
                v-if="eventDetails.links.feedback"
                :href="eventDetails.links.feedback"
                class="mr-1 mb-1"
                label
                >Feedback</v-btn
              >

              <v-btn
                color="red"
                dark
                target="_blank"
                v-if="eventDetails.links.youtube"
                :href="eventDetails.links.youtube"
                class="mr-1 mb-1"
                label
                >Youtube Live</v-btn
              >
            </div>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "EventAbout",
  props: ["eventDetails"],
  computed: {
    ...mapState(["config"]),
  },
};
</script>

<style></style>
