<template>
  <v-content class="px-0 mx-0 pt-5">
    <v-container fluid class="px-0 pt-5 mt-5 py-0">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class="pt-3">
          <contactHeader />
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="px-0 py-0">
      <v-row justify="center" align="center">
        <v-col md="12" lg="10" xs="12" class>
          <contactDetails />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import contactHeader from "../components/Contact/contactHeader";
import contactDetails from "../components/Contact/contactDetails";

export default {
  components: {
    contactDetails,
    contactHeader
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


