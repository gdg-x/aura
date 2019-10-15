<template>
  <v-content class="px-0">
    <v-container fluid class="px-0">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <homeStartScreen />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-2" >
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0 " :class="this.$vuetify.theme.dark == true?'darkModeContainer':'lightModeContainer'">
          <whatwedo />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-2" >
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0" >
          <aboutCommunity />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-2" >
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <events />
        </v-col>
      </v-row>
    </v-container>


    <v-container fluid class="pa-0 py-0" >
      <v-row justify="center" align="center" class="py-4" :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <featureEvents />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-2" >
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <partners />
        </v-col>
      </v-row>
    </v-container>

  </v-content>
</template>

<script>
import homeStartScreen from '../components/home/homeScreen';
import whatwedo from '../components/home/whatwedo';
import aboutCommunity from '../components/home/aboutCommunity';
import events from '../components/home/events';
import featureEvents from '../components/home/featureEvents';
import partners from '../components/common/partners'

export default {
  components: {
    homeStartScreen,
    whatwedo,
    aboutCommunity,
    events,
    featureEvents,
    partners
  },
};
</script>


