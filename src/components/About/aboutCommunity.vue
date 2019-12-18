<template>
  <v-container fluid class="py-0 my-0 mt-2 mb-5">
    <v-row class="py-0 my-0" align="center">
      <v-col md="4" sm="4" cols="12" class="py-0 my-0">
        <!-- <v-img
          :src="require('@/assets/img/do-not-remove/about.png')"
          :lazy-src="require('@/assets/img/do-not-remove/about.png')"
          class="mb-3"
          width="100%"
        >-->
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
        <!-- </v-img> -->
      </v-col>
      <v-col md="8" sm="8" cols="12" class="py-0 my-0">
        <p class="google-font mt-0" style="font-size:110%">{{ communityData.communityLongDec }}</p>
        <p class="google-font mt-0 mb-0" style="font-size:110%">
          SAF focuses on building security into DevOps with the goal of
          preventing vulnerable applications from reaching production.
        </p>
        <br />
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
