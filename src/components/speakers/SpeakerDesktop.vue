<template>
  <div class="SpeakerDesktop">
    <v-container>
      <v-row v-if="loader && notFound == false" justify="center" align="center">
        <v-col md="12" lg="10" sm="11" xs="12" class="text-center">
          <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
        </v-col>
      </v-row>
      <v-row v-else-if="Object.keys(speaker).length>0">
        <v-col cols="12" sm="4" md="3" lg="3">
          <v-row>
            <v-col cols="12" sm="12">
              <v-card elevation="1">
                <v-card-title
                  class="grey lighten-4 google-font"
                  primary-title
                  :style="{'background-image':'url('+ require('@/assets/img/dontremove/spakerhead.jpg') +')'}"
                  style="background-position:right top;padding-top:20%;"
                ></v-card-title>
                <v-card-text class="px-5 pb-5" style="margin-top: -60px;">
                  <v-container fluid class="my-0 pa-0">
                    <v-row align="center">
                      <v-col cols="12" class="text-center pa-2">
                        <v-avatar size="100">
                          <v-img
                            :src="checkExistance(speaker.image,0)?speaker.image:require('@/assets/img/dontremove/profile.jpg')"
                            style="border-style: solid;border-width: 5px;"
                            :style="{'border-color':this.$vuetify.theme.dark?'#424242':'white'}"
                          >
                            <template v-slot:placeholder>
                              <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                              </v-row>
                            </template>
                          </v-img>
                        </v-avatar>
                        <p
                          class="my-0 mt-3 google-font"
                          style="font-size:150%;"
                          :style="{color:this.$vuetify.theme.dark?'white':'#424242'}"
                        >{{speaker.name}}</p>
                        <p class="google-font my-0">{{ speaker.designation }}</p>
                        <p
                          class="my-0 google-font"
                          style="font-size:110%"
                          :style="{color:this.$vuetify.theme.dark?'white':'#424242'}"
                        >{{speaker.company.name}}</p>
                        <p class="google-font my-0">{{ speaker.city }}, {{ speaker.country }}</p>
                      </v-col>
                      <v-col cols="12"  class="text-center mt-0 pt-0">
                        <SocialMediaDetails :data="speaker.socialLinks"/>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" sm="12">
              <v-card>
                <v-card-title class="google-font">About:</v-card-title>
                <v-card-text>
                  <p class="google-font" style="font-size:90%">{{speaker.bio}}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="8" md="9" lg="9">
          <v-row align="center">
            <v-col cols="12">
              <v-card outlined>
                <v-card-title class="google-font">Sessions:</v-card-title>
                <v-card-text>
                  <v-row align="center">
                    <v-col cols="12" md="6" xl="4" v-for="sess in events" :key="sess.id">
                      <v-list rounded class="pa-0 ma-0">
                        <v-list-item v-ripple @click="$router.push({ path: '/events/'+sess.id})">
                          <v-list-item-avatar>
                            <v-avatar color="grey lighten-2">
                              <span
                                class="google-font black--text"
                                style="width:100vh"
                              >{{getCharString(sess.name)}}</span>
                            </v-avatar>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title class="google-font">{{ sess.name }}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
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
          :class="$vuetify.theme.dark == true?'darkModeCard':'whiteTheme'"
        >
          <v-container fluid>
            <v-row>
              <v-col md="12" lg="12" sm="12" cols="12" class="text-center">
                <v-img
                  :src="require('@/assets/img/svg/DataNotFound.svg')"
                  :lazy-src="require('@/assets/img/svg/DataNotFound.svg')"
                  width="20%"
                  style="border-radius:8px;margin-left:auto;margin-right:auto"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <h2 class="google-font">Speaker Not Found</h2>
                <p
                  class="google-font"
                >The requested URL /{{this.$route.params.id}} was not found on this server. That’s all we know.</p>
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
import SocialMediaDetails from '@/components/common/SocialInfo'
import { mapState } from 'vuex'

export default {
  name: "SpeakerDesktop",
  components:{
    SocialMediaDetails
  },
  data: () => ({
    speaker: {},
    events: [],
    loader: true,
    notFound: false,
    eventLoader: false
  }),
  computed:{
    ...mapState(['config'])
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
        .then(res => {
          if (res.success == true) {
            this.loader = false;
            this.speaker = res.data;
            document.title = this.speaker.name +" | " +this.config.generalConfig.name
          } else {
            this.loader = false;
            this.notFound = true;
          }
        })
        .catch(e => {
          this.loader = false;
          console.log(e);
        });
    },
    getevents(id) {
      this.eventLoader = true;
      service
        .getAllEvents()
        .then(res => {
          if (res.success == true) {
            this.eventLoader = false;
            res.data.map(event => {
              // event.active && event.visible
              if (event.visible) {
                event.speakers.map(speak => {
                  if (speak === id) {
                    this.events.push({name:event.name, id:event.id});
                  }
                });
              }
            });
          } else {
            this.eventLoader = false;
            this.notFound = true;
          }
        })
        .catch(e => {
          this.loader = false;
          console.log(e);
        });
    },
  }
  // data:
};
</script>
