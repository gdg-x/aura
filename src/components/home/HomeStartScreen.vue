<template>
  <v-container fluid class="py-0">
    <v-row align="center" class="fill-height">
      <v-col md="3" sm="6" cols="12" class>
        <v-img
          :src="checkExistance(config.generalConfig.homeImage,0)?config.generalConfig.homeImage:require('@/assets/img/svg/home.svg')"
          :lazy-src="checkExistance(config.generalConfig.homeImage,0)?config.generalConfig.homeImage:require('@/assets/img/svg/home.svg')"
          width="100%"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col md="9" sm="6" cols="12" class="px-0">
        <p
          class="google-font mb-1"
          :class="$vuetify.theme.dark == true?'dark-font-color':'light-font-color'"
          style="font-weight: 350;font-size:230%"
        >
          <b>
            Make good things
            <span style="color: #1a73e8;">together</span>.
          </b>
        </p>
        <p class="google-font mt-0 mb-0" style="font-size:150%">{{config.generalConfig.name}}</p>
        <p class="google-font" style="font-size:100%">{{config.generalConfig.shortDescription}}</p>
        <p class="google-font" style="font-size:100%;color:#9e9e9e">
          <span v-for="(item,i) in config.generalConfig.hashtags" :key="i">
            <v-chip
              :href="'https://twitter.com/hashtag/'+item"
              rel="noreferrer"
              target="_blank"
              small
              class="mr-1"
            >#{{item}}</v-chip>
            <!-- &nbsp; -->
          </span>
        </p>

        <v-btn
          v-if="checkExistance(config.generalConfig.becomemember,0)"
          :href="config.generalConfig.becomemember"
          target="_blank"
          rel="noreferrer"
          aria-label="Become a Member"
          class="ma-0 google-font elevation-1 primary mr-2"
          style="text-transform: capitalize;border-radius:5px;color:white"
        >Become a Member</v-btn>
        <v-btn
          v-if="checkExistance(config.generalConfig.learnMoreLink,0)"
          :href="config.generalConfig.learnMoreLink"
          target="_blank"
          aria-label="Learn More"
          rounded
          rel="noreferrer"
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

<style scoped>
.dark-font-color {
  color: white;
}
.light-font-color {
  color: #616161;
}
</style>