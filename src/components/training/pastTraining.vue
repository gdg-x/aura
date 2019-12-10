<template>
  <v-container fluid>
    <v-col cols="12" md="12" lg="12" sm="12" class>
        <p class="google-font mb-0" style="font-size:150%;color: #1a73e8;">Directory of past Trainings</p>
        <p class="google-font mt-0 mb-0" style="font-size:95%" >Trainings are listed in reverse chronological order by date.</p>
      </v-col>
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