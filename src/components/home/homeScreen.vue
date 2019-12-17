<template>
  <v-container fluid>
    <v-row align="center">
      <!-- <v-col md="3" sm="5">
        <v-img
          :src="require('@/assets/img/home.svg')"
          :lazy-src="require('@/assets/img/home.svg')"
          width="100%"
          style="border-radius:8px"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img> 
      </v-col>-->
      <v-col md="12" lg="10" xs="12">
        <p class="google-font mb-1" style="font-weight: 350;color: #616161;font-size:200%">
          <b>
            Security
            <span style="color: #1a73e8;">Automation</span>
            Framework
          </b>
        </p>
        <!-- <p class="google-font mt-0 mb-0" style="font-size:150%">{{communityData.community}}</p> -->
        <p class="google-font" style="font-size:100%">{{communityData.communityShortDescription}}</p>
        <!-- <p class="google-font" style="font-size:100%;color:#9e9e9e">
          <span v-for="(item,i) in communityData.communityHashTags" :key="i">#{{item}} &nbsp;</span>
        </p>-->

        <!-- <v-btn
          :href="communityData.CommunityMeetupLink"
          target="_blank"
          class="ma-0 google-font elevation-1 primary"
          style="text-transform: capitalize;border-radius:5px;color:white"
        >Become a Member</v-btn>
&nbsp;
        <v-btn
          :href="communityData.GDGProgramWebsite"
          target="_blank"
          rounded
          color="cyan"
          style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"
          outlined
          class="ml-0"
          dark
        >Learn More</v-btn>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import communityData from "@/assets/data/communityData.json";
export default {
  data() {
    return {
      communityData: communityData
    };
  }
};
</script>