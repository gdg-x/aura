<template>
  <v-dialog v-model="dialog" width="700">
    <template v-slot:activator="{ on }">
      <div
        v-on="on"
        style="cursor: pointer;height:100%"
        class="text-center py-4 ma-1 py-3"
        :class="$vuetify.theme.dark == true?'darkModeCard':'whiteTheme'"
      >
        <v-avatar size="100">
          <img
            :src="getImgUrl(data.image, 'profile.jpg')"
            :lazy-src="getImgUrl(data.image, 'profile.jpg')"
          />
        </v-avatar>
        <p class="mt-3 mb-0 google-font mb-0" style="font-size:105%">{{data.name}}</p>
        <p
          class="mt-1 mb-0 google-font mt-0"
          style="font-size:80%"
        >{{data.company.name | summery(20)}}</p>
      </div>
    </template>

    <v-card color>
      <v-card-title class="px-5 google-font" primary-title>{{data.name}}</v-card-title>

      <v-card-text class="pa-5">
        <p class="google-font mb-0">{{data.city}}, {{data.country}}</p>
        <p class="google-font mb-0">{{data.designation}}</p>
        <p class="google-font mt-0">{{data.company.name}}</p>
        <p class="google-font">{{data.bio}}</p>
        <socialMediaDetails class="pl-0 ml-0" :data="data.socialLinks" />
        <v-btn class="primary mt-3" small depressed @click="goToSpeaker(data.id)">See More Info</v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import socialMediaDetails from "@/components/common/SocialInfo";
export default {
  components: {
    socialMediaDetails
  },
  props: ["data"],
  data() {
    return {
      dialog: false
    };
  },
  mounted() {},
  methods: {
    goToSpeaker(id) {
      this.$router.push("/speakers/" + id);
    }
  },
  filters: {
    summery: (val, num) => {
      return val.substring(0, num) + "..";
    }
  }
};
</script>

<style scoped>
.whiteTheme {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}
</style>