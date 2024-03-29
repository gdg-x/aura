<template>
  <v-container fluid class="py-0 my-0 mb-5">
    <v-row class="py-0 my-0" align="start">
      <v-col md="8" sm="8" cols="12" class="py-0 my-0">
        <p class="google-font mt-0" style="font-size: 100%">
          {{ data.longDescription }}
        </p>
        <br />
        <v-btn
          v-if="checkExistance(data.becomemember, 0)"
          :href="data.becomemember"
          target="_blank"
          class="ma-0 google-font elevation-1 primary"
          style="text-transform: capitalize; border-radius: 5px; color: white"
          >Become a Member</v-btn
        >

        &nbsp;

        <v-btn
          v-if="checkExistance(data.learnMoreLink, 0)"
          :href="data.learnMoreLink"
          target="_blank"
          rounded
          color="cyan"
          depressed
          style="
            text-transform: capitalize;
            border-radius: 5px;
            text-transform: capitalize;
          "
          outlined
          class="ml-0"
          dark
          >Learn More</v-btn
        >
      </v-col>
      <v-col md="4" sm="4" cols="12" class="py-0 my-0">
        <v-img :src="require('@/assets/img/common/about.svg')"></v-img>

        <!-- <v-img
                    :src="require('@/assets/img/donotremove/about.png')"
                    :lazy-src="require('@/assets/img/donotremove/about.png')"
                    class=" mb-3"
                    width="90%"
                >
                    <template v-slot:placeholder>
                        <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                        >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["data"],
  data: () => ({}),
};
</script>