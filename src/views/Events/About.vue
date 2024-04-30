<template>
  <v-main class="pa-0 ma-0 google-font">
    <v-container fluid class="py-0 my-0 mt-0">
      <v-row class="py-0 my-0" align="center" justify="center">
        <v-col cols="12" md="12" class="pa-0">
          <v-img
            :src="getImgUrl(eventDetails.image, 'eventbanner.jpg')"
            :lazy-src="getImgUrl(eventDetails.image, 'eventbanner.jpg')"
            width="100%"
            cover
            style="border-radius: 17px"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
            height="380px"
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
              <div class="pa-5">
                <p class="my-0" style="font-size: 150%">
                  {{ eventDetails.name }}
                </p>
                <p class="my-0 my-n1" style="font-size: 80%">
                  {{ config.generalConfig.name }}
                </p>
                <!-- <br> -->
                <p class="my-0 my-n2" style="font-size: 70%">
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
        <v-col
          cols="12"
          md="12"
          class="pa-md-5 pa-3 mt-n3"
          :class="$vuetify.theme.dark ? 'aura-card-dark' : 'aura-card-light'"
        >
          <v-container fluid>
            <p class="py-3" style="">
              <span class="mr-5 my-auto"
                ><v-icon class="mr-1 mb-1">mdi-calendar</v-icon
                >{{ convtDate(eventDetails.date) }}</span
              >
              <span class="mr-5 my-auto"
                ><v-icon class="mr-1 mb-1">mdi-clock-outline</v-icon
                >{{ eventDetails.time.starttime }} -
                {{ eventDetails.time.endtime }}</span
              >
              <span class="mr-5 my-auto"
                ><v-icon class="mr-1 mb-1">mdi-map-marker-outline</v-icon
                ><a
                  target="_blank"
                  style="text-decoration: none"
                  :href="eventDetails.venue.googlemapsurl"
                  >{{ eventDetails.venue.name }}</a
                ></span
              >

              <span
                class="float-right"
                v-for="(item, i) in eventDetails.hashtags"
                :key="i"
              >
                <v-chip
                  class="mr-1"
                  :href="'https://twitter.com/hashtag/' + item"
                  target="_blank"
                  >#{{ item }}</v-chip
                >
              </span>
            </p>

            <h1
              :class="
                this.$vuetify.theme.dark
                  ? 'white--text'
                  : 'grey--text text--darken-3'
              "
              class="google-font mb-2"
              style="font-size: 180%"
            >
              {{ eventDetails.name }} Details
            </h1>
            <p class="google-font mb-3" style="font-size: 90%" v-html="eventDetails.des"></p>

            <div class="mt-10">
              <v-btn
                color="primary"
                dark
                target="_blank"
                rounded
                depressed
                v-if="eventDetails.links.registration"
                :href="eventDetails.links.registration"
                class="mr-1 mb-1 aura-btn"
                label
                >Registration</v-btn
              >
              <!-- <v-btn
                color="pink"
                dark
                rounded
                depressed
                target="_blank"
                v-if="eventDetails.links.meetup"
                :href="eventDetails.links.meetup"
                class="mr-1 mb-1 aura-btn"
                label
                >Meetup</v-btn
              > -->

              <v-btn
                color="orange"
                dark
                target="_blank"
                rounded
                depressed
                v-if="eventDetails.links.callforspeaker"
                :href="eventDetails.links.callforspeaker"
                class="mr-1 mb-1"
                label
                >Call For Speakers</v-btn
              >

              <!-- <v-btn
                color="indigo"
                dark
                target="_blank"
                rounded
                depressed
                v-if="eventDetails.links.facebook"
                :href="eventDetails.links.facebook"
                class="mr-1 mb-1"
                label
                >Facebook</v-btn
              > -->

              <v-btn
                color="success"
                dark
                target="_blank"
                rounded
                depressed
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
                rounded
                depressed
                v-if="eventDetails.links.youtube"
                :href="eventDetails.links.youtube"
                class="mr-1 mb-1"
                label
                >Youtube

                <v-icon right>mdi-youtube</v-icon></v-btn
              >
            </div>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      fluid
      class="aura-event-card mt-4 mb-5 d-none d-sm-block d-md-block d-lg-block"
      :class="$vuetify.theme.dark ? 'aura-card-dark' : 'aura-card-light'"
    >
      <!-- Other Data -->
      <v-row class="pa-3">
        <v-col md="6" sm="6" class="pa-3">
          <p><b>Speakers</b></p>
          <v-container
            fluid
            class="pa-5"
            :class="$vuetify.theme.dark ? 'aura-card-dark-secondary' : 'aura-card-white'"
          >
            <v-row>
              <v-col
                md="6"
                cols="12"
                class="ma-0 pa-0"
                v-for="(item, index) in eventSpeakers"
                :key="index"
              >
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-img
                        :src="
                          checkExistance(item.image, 0)
                            ? item.image
                            : require('@/assets/img/donotremove/profile.jpg')
                        "
                      ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <div>
                        <p class="mb-1">{{ item.name }}</p>
                        <p class="mb-0" style="font-size: 80%">
                          {{ item.designation }}
                        </p>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="aura-event-container">
                <v-btn
                  class="aura-btn aura-speaker-card"
                  dark
                  depressed
                  rounded
                  :to="'/events/' + $route.params.id + '/speakers'"
                  >See more</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col md="6" sm="6" class="pa-3">
          <p><b>Partners</b></p>
          <v-container
            fluid
            class="pa-5"
            :class="$vuetify.theme.dark ? 'aura-card-dark-secondary' : 'aura-card-white'"
          >
            <v-row
              class="pa-0"
              align="center"
              v-if="checkExistance(eventDetails.partners, 0)"
            >
              <v-col
                cols="6"
                md="4"
                lg="4"
                sm="6"
                class="pa-1"
                v-for="(item, i) in eventPartners"
                :key="i"
              >
                <div
                  class="ma-1 px-2"
                  style="
                    background-color: white;
                    border: 1px solid #e0e0e0;
                    border-radius: 5px;
                  "
                >
                  <a :href="item.socialLinks.web" target="_blank">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-img
                          :src="getImgUrl(item.image, 'noimage.jpg')"
                          :lazy-src="getImgUrl(item.image, 'noimage.jpg')"
                          width="100%"
                          contain
                          style="border-radius: 5px"
                          height="80px"
                          v-on="on"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                              ></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                      </template>
                      <span class="google-font">{{ item.name }}</span>
                    </v-tooltip>
                  </a>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="aura-event-container">
                <v-btn
                  class="aura-btn aura-partner-card"
                  dark
                  depressed
                  rounded
                  :to="'/events/' + $route.params.id + '/partners'"
                  >See more</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <!-- Other Data -->
    </v-container>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
import service from "@/services/appservices";
export default {
  name: "EventAbout",
  props: ["eventDetails"],
  data: () => ({
    eventSpeakers: [],
    SpeakersData: [],
    eventPartners: [],
    partnersData: [],
  }),
  computed: {
    ...mapState(["config"]),
  },
  mounted() {
    this.getAllSpeakers();
    this.getAllPartners();
  },
  methods: {
    getAllSpeakers() {
      this.isLoading = true;
      this.eventSpeakers = [];
      service
        .getAllSpeakers()
        .then((res) => {
          if (res.success == true) {
            this.SpeakersData = res.data;
            this.eventDetails.speakers.map((s) => {
              this.SpeakersData.map((obj) => {
                if (obj.id == s) {
                  this.eventSpeakers.push(obj);
                }
              });
            });
            this.eventSpeakers = this.getRandomElements(this.eventSpeakers, 4);
          }
          this.isLoading = false;
        })
        .catch((e) => {
          this.ErrorMsg = e;
          this.isLoading = false;
        });
    },
    getAllPartners() {
      this.isLoading = true;
      this.eventPartners = [];
      service
        .getAllPartners()
        .then((res) => {
          if (res.success) {
            this.partnersData = res.data;
            this.eventDetails.partners.map((p) => {
              this.partnersData.map((obj) => {
                if (obj.id == p) {
                  this.eventPartners.push(obj);
                }
              });
            });
            this.eventPartners = this.getRandomElements(this.eventPartners, 4);
          }
          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
          this.isLoading = false;
        });
    },
    getRandomElements(arr, count) {
      const shuffled = arr.slice().sort(() => Math.random() - 0.5);
      return shuffled.slice(0, count);
    },
  },
};
</script>
