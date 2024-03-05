<template>
  <v-dialog v-model="dialog" width="700">
    <template v-slot:activator="{ on }">
      <div
        v-on="on"
        style="cursor: pointer"
        class="py-5 ma-1 fill-height"
        :class="$vuetify.theme.dark == true ? 'aura-card-dark' : 'aura-card-light'"
      >
        <div class="text-center">
          <v-avatar size="100">
            <img
              :src="getImgUrl(data.image, 'profile.jpg')"
              :lazy-src="getImgUrl(data.image, 'profile.jpg')"
              alt=""
            />
          </v-avatar>
          <p class="mt-3 mb-0 google-font mb-0" style="font-size: 120%">
            <b>{{ summeryText(data.name, 20) }}</b>
          </p>
          <p class="mt-0 mb-0 google-font mt-0" style="font-size: 80%">
            {{ summeryText(data.designation, 20) }}
          </p>
        </div>

        <socialMediaDetails class="float-left" :data="data.socialLinks" />
        <v-btn
          fab
          depressed
          shaped
          small
          color="black"
          dark
          class="float-right mt-n6 mr-4 mb-4"
        >
          <v-icon>mdi-arrow-top-right</v-icon>
        </v-btn>
      </div>
    </template>

    <v-card class="pa-4" :class="theme.isDark ? 'grey darken-3' : 'white'" style="border-radius: 12px;">
      <v-card-title class="px-5 google-font" primary-title>
        {{ data.name }}
      </v-card-title>

      <v-card-text class="pa-5">
        <p class="google-font">{{ data.designation }}</p>
        <p class="google-font">{{ data.bio }}</p>

        <socialMediaDetails class="pl-0 ml-0" :data="data.socialLinks" />

        <v-btn class="primary mt-3" small depressed @click="goToTeam(data.id)"
          >See More Info</v-btn
        >
      </v-card-text>

      <!-- <v-divider></v-divider> -->

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import socialMediaDetails from "@/components/common/SocialInfo";
export default {
  components: {
    socialMediaDetails,
  },
  inject: ["theme"],
  props: ["data"],
  data() {
    return {
      dialog: false,
    };
  },
  mounted() {},
  methods: {
    goToTeam(id) {
      this.$router.push("/team/" + id);
    },
  }
};
</script>

