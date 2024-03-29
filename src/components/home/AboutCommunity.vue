<template>
  <v-container
    fluid
    :class="$vuetify.theme.dark ? 'aura-card-dark' : 'aura-card-light'"
  >
    <v-row align="center">
      <v-col cols="12" md="12" lg="12" sm="12" class="pa-0">
        <div class="ma-1">
          <div class="pa-5">
            <p class="google-font mb-0" style="font-size: 150%">
              About {{ config.generalConfig.name }}
            </p>
            <p class="google-font mt-0" style="font-size: 95%">
              {{ config.generalConfig.longDescription }}
            </p>
            <router-link
              to="/about"
              class="google-font"
              style="text-decoration: none"
              >Learn more about us</router-link
            >
            <div class="float-right mb-3">
              <v-btn
              v-if="checkExistance(config.generalConfig.meetupLink, 0)"
              :href="config.generalConfig.meetupLink"
              target="_blank"
              depressed
              dark
              rounded
              color
              class="ma-0 mx-2 google-font mb-2 aura-btn"
              style="text-transform: capitalize"
              >Meetup Page</v-btn
            >
            <v-btn
              fab
              depressed
              shaped
              small
              dark
              to="/about"
              class="mb-2"
              color="#363636"
            >
              <v-icon>mdi-arrow-top-right</v-icon>
            </v-btn>
            </div>
            
            <br />
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
    ...mapState(["config"]),
  },
};
</script>