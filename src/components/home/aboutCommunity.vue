<template>
  <v-container fluid class="pa-0">
    <v-row align="center" class>
      <v-col cols="12" md="12" lg="12" sm="12" class="pa-0" style="color:white">
        <div class="ma-1">
          <div class="pa-5">
            <p class="google-font mb-0" style="font-size:150%">About {{communityData.communityName}}</p>
            <p class="google-font mt-0" style="font-size:95%">{{communityData.communityLongDec}}</p>

            <!-- <v-btn
              :href="communityData.CommunityMeetupLink"
              target="_blank"
              outlined
              color
              class="ma-0 google-font"
              style="border-radius:5px;text-transform: capitalize;color:white"
            >Meetup Page</v-btn>&nbsp; -->
            <!-- <v-btn
              href="#"
              target="_blank"
              outlined
              color
              class="ma-0 google-font"
              style="border-radius:5px;text-transform: capitalize;color:white"
            >Facebook Page</v-btn> -->
            <!-- <br />
            <br />
            <router-link
              to="/about"
              class="google-font"
              style="text-decoration:none;color:white"
            >See More about {{communityData.community}}</router-link> -->
          </div>
        </div>
      </v-col>
      <!-- :class="this.$vuetify.theme.dark == true?'darkModeContainer':'lightModeWhiteContainer'" -->
      <!-- <v-col cols="12" md="5" lg="4" sm="8" class="pa-0 " :class="this.$vuetify.theme.dark == true?'darkModeContainer':'lightModeWhiteContainer'" > 
                   <v-container fluid class="py-0">
                       <v-row align="stretch" justify="start">
                           <v-col cols="12" md="4" lg="4" sm="6" class="pa-0">
                               
                            <v-img
                            min-width="100%"
                            style="border-radius:8px;"
                            src="https://www.womentechmakers.com/static/images/iwd19carousel/iwd19-19.jpg"
                            lazy-src="https://www.womentechmakers.com/static/images/iwd19carousel/iwd19-19.jpg">
                                <v-layout
                                    slot="placeholder"
                                   
                                    align-center
                                    justify-center
                                    
                                    class="grey"
                                    ma-0
                                >
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            
                            </v-img>   
                           </v-col>

                           <v-col cols="12" md="12" lg="12" sm="12" class="pa-3">
                               <p class="google-font mb-0" style="font-size:150%">About MITRE SAF</p>
                                <p class="google-font mt-0" style="font-size:95%">Google Developer Group Jalandhar is inspired by GTUG/GDG Family . We started our journey in Feb 2011. We try to engage student developers, fresh graduates and professionals through our hack events & meetups. The motive is to create a local ecosystem of programmers & hackers in and around Jalandhar. The technology awareness is main goal for first few years of the group.</p>
                           </v-col> 

                       </v-row>
                   </v-container>

                
      </v-col>-->
    </v-row>
  </v-container>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
export default {
  name: "App",
  data: () => ({
    communityData: communityData
  }),
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