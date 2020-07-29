<template>
  <p class="google-font mt-4 mb-3" style="font-size:130%">
    Follow Us:
    <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.facebook,0)">
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          rel="noreferrer"
          :href="config.generalConfig.socialLinks.facebook"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
      </template>
      <span>Facebook</span>
    </v-tooltip>

    <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.twitter,0)">
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          rel="noreferrer"
          :href="config.generalConfig.socialLinks.twitter"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </template>
      <span>Twitter</span>
    </v-tooltip>

    <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.instagram,0)">
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          rel="noreferrer"
          :href="config.generalConfig.socialLinks.instagram"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </template>
      <span>Instagram</span>
    </v-tooltip>

    <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.github,0)">
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          rel="noreferrer"
          :href="config.generalConfig.socialLinks.github"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-github-circle</v-icon>
        </v-btn>
      </template>
      <span>Github</span>
    </v-tooltip>
    <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.linkedin,0)">
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          rel="noreferrer"
          :href="config.generalConfig.socialLinks.linkedin"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </template>
      <span>Linkedin</span>
    </v-tooltip>
    <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.youtube,0)">
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          rel="noreferrer"
          :href="config.generalConfig.socialLinks.youtube"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-youtube-play</v-icon>
        </v-btn>
      </template>
      <span>YouTube</span>
    </v-tooltip>
    <v-tooltip top v-if="checkExistance(config.generalConfig.socialLinks.medium,0)">
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          rel="noreferrer"
          :href="config.generalConfig.socialLinks.medium"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-medium</v-icon>
        </v-btn>
      </template>
      <span>Medium</span>
    </v-tooltip>
  </p>
</template>

<script>
export default {
  name: "CommunitySocialInfo",
  props: ["config"],
};
</script>

<style>
</style>