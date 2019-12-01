<template>
  <v-container fluid class="py-0 my-0 mt-3">
    <v-row class="py-0 my-0">
      <v-col md="12" sm="12" cols="12" class="py-0 my-0">
        <h1 class="google-font mb-2">Code of conducts</h1>
      </v-col>
    </v-row>
    <v-row class="py-0 my-0">
      <v-col md="8" sm="8" cols="12" class="py-0 my-0">
        <p class="google-font" style="font-size:110%">{{communitydata.CodeOfConduct}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import communitydata from "@/assets/data/communitydata.json";
export default {
  data() {
    return {
      communitydata: communitydata
    };
  }
};
</script>