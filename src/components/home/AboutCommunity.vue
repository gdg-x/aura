<template>
  <v-container fluid class="pa-0">
    <v-row align="center" class>
      <v-col cols="12" md="12" lg="12" sm="12" class="pa-0" style="color:white">
        <div class="ma-1">
          <div class="pa-5">
            <p class="google-font mb-0" style="font-size:150%">About {{config.generalConfig.name}}</p>
            <p
              class="google-font mt-0"
              style="font-size:95%"
            >{{config.generalConfig.longDescription}}</p>
            <v-btn
              v-if="checkExistance(config.generalConfig.meetupLink,0)"
              :href="config.generalConfig.meetupLink"
              target="_blank"
              outlined
              color
              class="ma-0 google-font mb-2"
              style="border-radius:5px;text-transform: capitalize;color:white"
            >Meetup Page</v-btn>&nbsp;
            <br />
            <router-link
              to="/about"
              class="google-font"
              style="text-decoration:none;color:white"
            >See More about {{config.generalConfig.shortName || config.generalConfig.name}}</router-link>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data: () => ({}),
  computed: {
    ...mapState(["config"])
  }
};
</script>