<template>
  <v-container fluid>
    <v-row align="center">
      <v-col md="3" sm="5" cols="12">
        <v-img
          :src="require('@/assets/img/svg/home.svg')"
          :lazy-src="require('@/assets/img/svg/home.svg')"
          width="100%"
          style="border-radius:8px"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col md="9" sm="7" cols="12">
        <p class="google-font mb-1" style="font-weight: 350;color: #616161;font-size:200%">
          <b>
            Make good things
            <span style="color: #1a73e8;">together</span>.
          </b>
        </p>
        <p class="google-font mt-0 mb-0" style="font-size:150%">{{config.generalConfig.name}}</p>
        <p class="google-font" style="font-size:100%">{{config.generalConfig.shortDescription}}</p>
        <p class="google-font" style="font-size:100%;color:#9e9e9e">
          <span v-for="(item,i) in config.generalConfig.hashtags" :key="i">
            <v-chip small class="mr-1">#{{item}}</v-chip>
            <!-- &nbsp; -->
          </span>
        </p>

        <v-btn
          :href="config.generalConfig.meetupLink"
          target="_blank"
          class="ma-0 google-font elevation-1 primary"
          style="text-transform: capitalize;border-radius:5px;color:white"
        >Become a Member</v-btn>
&nbsp;
        <v-btn
          :href="config.generalConfig.learnMoreLink"
          target="_blank"
          rounded
          color="cyan"
          style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"
          outlined
          class="ml-0"
          dark
        >Learn More</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapState(["config"])
  }
};
</script>