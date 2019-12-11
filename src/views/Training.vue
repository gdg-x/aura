<template>
  <v-content class="pa-0 pt-5">
    <v-container fluid class="pa-0 pt-5 mt-2">
      <v-row
        justify="center"
        align="center"
        :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'"
        class="py-0 my-0"
      >
        <v-col md="12" lg="10" xs="12" class="py-3 my-0">
          <trainingHeader />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="pa-0 py-2">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="py-0">
          <pastTraining />
        </v-col>
      </v-row>
    </v-container>

  </v-content>
</template>

<script>
import trainingHeader from "../components/training/trainingHeader";
import pastTraining from "../components/training/traininginfo";

export default {
  components: {
    trainingHeader,
    pastTraining
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


