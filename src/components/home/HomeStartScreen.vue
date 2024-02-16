<template>
  <v-container fluid class="py-0">
    <v-row align="center">
      <v-col md="8">
        <v-avatar color="#F1F2F3" size="35" class="mr-2">
          <v-img
            alt="Community Logo"
            class="shrink google-font"
            contain
            :src="config.generalConfig.toolbarImage"
            transition="scale-transition"
            width="25"
          />
        </v-avatar>
        <span class="google-font mb-0" style="font-size: 120%">{{
          config.generalConfig.shortName || config.generalConfig.name || ""
        }}</span>

        <p
          style="font-weight: 600; font-size: 300%"
          class="google-font mb-0 mt-8 "
        >
          Make good things <span class="aura-text">together</span>.
        </p>

        <p class="google-font" style="font-size: 100%; color: #9e9e9e">
          <span v-for="(item, i) in config.generalConfig.hashtags" :key="i">
            <v-chip
              :href="'https://twitter.com/hashtag/' + item"
              rel="noreferrer"
              target="_blank"
              small
              class="mr-1"
              >#{{ item }}</v-chip
            >
            <!-- &nbsp; -->
          </span>
        </p>

        <p class="google-font" style="font-size: 100%">
          {{ config.generalConfig.shortDescription }}
        </p>

        <br class="my-6" />

        <v-btn
          v-if="checkExistance(config.generalConfig.becomemember, 0)"
          :href="config.generalConfig.becomemember"
          target="_blank"
          rel="noreferrer"
          depressed
          rounded
          aria-label="Become a Member"
          class="ma-0 google-font mr-2 aura-btn"
          style="text-transform: capitalize; color: white"
          >Become a Member</v-btn
        >

        <v-btn fab depressed shaped small>
          <v-icon>mdi-arrow-top-right</v-icon>
        </v-btn>
      </v-col>
      <v-col md="4">
        <v-img
          :src="
            checkExistance(config.generalConfig.homeImage, 0)
              ? config.generalConfig.homeImage
              : require('@/assets/img/svg/home.svg')
          "
          :lazy-src="
            checkExistance(config.generalConfig.homeImage, 0)
              ? config.generalConfig.homeImage
              : require('@/assets/img/svg/home.svg')
          "
          class="my-md-5"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapState(["config"]),
  },
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