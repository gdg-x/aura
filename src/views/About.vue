<template>
  <v-content class="px-0 mx-0 pt-5">
    <v-container fluid class="px-0 pt-5 mt-5 py-0">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="pt-3">
          <aboutHeader />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="px-0 py-0">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class>
          <aboutCommunity />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-0 my-0">
      <v-row
        justify="center"
        align="center"
        :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'"
        class="py-5"
      >
        <v-col md="12" lg="10" xs="12" class="py-0">
          <communityGuidelines />

          <!-- <antiHarassmentPolicy/> -->
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-0 my-0">
      <v-row justify="center" align="center" class="py-5">
        <v-col md="12" lg="10" xs="12" class="py-0 mb-5">
          <coc />
          <antiHarassmentPolicy />
        </v-col>
      </v-row>
    </v-container>
    <!-- :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'" class="py-5" -->
    <!-- <v-container fluid class="pa-0 py-2 mt-5" >
      <v-row justify="center" align="center" >
        <v-col md="12" lg="10" xs="12" class="py-0">
          <organizingTeam />
        </v-col>
      </v-row>
    </v-container>-->
  </v-content>
</template>

<script>
import aboutHeader from "../components/About/aboutHeader";
import aboutCommunity from "../components/About/aboutCommunity";
import communityGuidelines from "../components/About/communityGuidelines";
import coc from "../components/About/coc";
import antiHarassmentPolicy from "../components/About/AntiHarassmentPolicy";

export default {
  components: {
    aboutCommunity,
    aboutHeader,
    communityGuidelines,
    coc,
    antiHarassmentPolicy
  },
  created() {
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (this.$vuetify.theme.dark) {
      metaThemeColor.setAttribute("content", "#212121");
    } else {
      metaThemeColor.setAttribute("content", "#0277bd");
    }
  }
};
</script>


