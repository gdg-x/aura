<template>
  <div class="SpeakerDesktop google-font">
    <v-container fluid>
      <v-row v-if="loader && notFound == false" justify="center" align="center">
        <v-col md="12" lg="10" sm="11" xs="12" class="text-center">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-col>
      </v-row>
      
      <v-row v-else-if="Object.keys(speaker).length > 0">
        <v-col md="12" cols="12" sm="12" class="my-0">
          <v-btn
            text
            rounded
            @click="$router.push('/speakers')"
            class="google-font mb-0"
            style="
              text-transform: capitalize;
              text-decoration: none;
            "
          >
            <v-icon left style="font-size: 150%">mdi-arrow-left-thick</v-icon>
            <span style="font-size: 120%">All Speakers</span>
          </v-btn>
        </v-col>
        <v-col cols="12" sm="5" md="3" lg="3">
          <v-row>
            <v-col cols="12" sm="12">
              <v-card
                elevation="0"
                :class="$vuetify.theme.dark ? 'aura-card-dark' : 'aura-card-light'"
              >
                <v-card-text class="px-5 pb-5">
                  <v-container fluid class="my-0 pa-0">
                    <v-row align="center">
                      <v-col cols="12" class="pa-4">
                        <v-avatar size="130" style="border-radius: 12px">
                          <v-img
                            contain
                            :src="
                              checkExistance(speaker.image, 0)
                                ? speaker.image
                                : require('@/assets/img/donotremove/profile.jpg')
                            "
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
                        </v-avatar>
                        <p
                          class="my-0 mt-3 google-font"
                          style="font-size: 150%"
                          :style="{
                            color: this.$vuetify.theme.dark
                              ? 'white'
                              : '#424242',
                          }"
                        >
                          {{ speaker.name }}
                        </p>
                        <p class="google-font my-0">
                          {{ speaker.designation }}
                        </p>
                        <p
                          class="my-0 google-font"
                          style="font-size: 110%"
                          :style="{
                            color: this.$vuetify.theme.dark
                              ? 'white'
                              : '#424242',
                          }"
                        >
                          {{ speaker.company.name }}
                        </p>
                        <p class="google-font my-0">
                          {{ speaker.city }}, {{ speaker.country }}
                        </p>

                        <p class="mb-0 mt-5"><b>Bio</b></p>
                        <p class="google-font" style="font-size: 100%">
                          {{ speaker.bio }}
                        </p>

                        <SocialMediaDetails :data="speaker.socialLinks" />
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="7" md="9" lg="9">
          <v-row align="center">
            <v-col cols="12">
              <v-card
                flat
                class="pa-4"
                :class="$vuetify.theme.dark ? 'aura-card-dark' : 'aura-card-light'"
              >
                <v-card-title class="google-font">Sessions:</v-card-title>
                <v-card-text>
                  <v-row align="center">
                    <v-col
                      cols="12"
                      md="6"
                      xl="4"
                      v-for="sess in events"
                      :key="sess.id"
                    >
                    <div style="cursor: pointer;" @click="$router.push({ path: '/events/' + sess.id })" class="pa-4" :class="$vuetify.theme.dark ? 'aura-card-dark' : 'aura-card-white'">
                      <p class="mb-0">{{ convtDate(sess.date)}}</p>
                      <p style="font-size: 130%;" class="mb-0"><b>{{ sess.name }}</b></p>
                    </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        align="center"
        class="py-3 px-4"
        v-if="notFound == true && loader == false"
      >
        <v-col
          md="12"
          lg="10"
          sm="11"
          xs="12"
          class="pt-3"
          :class="$vuetify.theme.dark == true ? 'aura-card-dark' : 'aura-card-light'"
        >
          <v-container fluid>
            <v-row>
              <v-col md="12" lg="12" sm="12" cols="12" class="text-center">
                <v-img
                  :src="require('@/assets/img/common/DataNotFound.svg')"
                  :lazy-src="require('@/assets/img/common/DataNotFound.svg')"
                  width="20%"
                  style="
                    border-radius: 8px;
                    margin-left: auto;
                    margin-right: auto;
                  "
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
                <h2 class="google-font">Speaker Not Found</h2>
                <p class="google-font">
                  The requested URL /{{ this.$route.params.id }} was not found
                  on this server. That’s all we know.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import service from "@/services/appservices";
import SocialMediaDetails from "@/components/common/SocialInfo";
import { mapState } from "vuex";

export default {
  name: "SpeakerDesktop",
  components: {
    SocialMediaDetails,
  },
  data: () => ({
    speaker: {},
    events: [],
    loader: true,
    notFound: false,
    eventLoader: false,
  }),
  computed: {
    ...mapState(["config"]),
  },
  mounted() {
    this.details(this.$route.params.id);
    this.getevents(this.$route.params.id);
  },
  methods: {
    details(id) {
      this.loader = true;
      service
        .getSpeaker(id)
        .then((res) => {
          if (res.success == true) {
            this.loader = false;
            this.speaker = res.data;
            document.title =
              this.speaker.name + " | " + this.config.generalConfig.name;
          } else {
            this.loader = false;
            this.notFound = true;
          }
        })
        .catch((e) => {
          this.loader = false;
          console.log(e);
        });
    },
    getevents(id) {
      this.eventLoader = true;
      service
        .getAllEvents()
        .then((res) => {
          if (res.success == true) {
            this.eventLoader = false;
            res.data.map((event) => {
              // event.active && event.visible
              if (event.visible) {
                // console.log('event:', event);
                event.speakers.map((speak) => {
                  if (speak === id) {
                    this.events.push({ name: event.name, id: event.id, date:event.date });
                  }
                });
              }
            });
          } else {
            this.eventLoader = false;
            this.notFound = true;
          }
        })
        .catch((e) => {
          this.loader = false;
          console.log(e);
        });
    }
  },
  // data:
};
</script>
