<template>
  <v-dialog v-model="dialog" width="700">
    <template v-slot:activator="{ on }">
      <div
        v-on="on"
        style="cursor: pointer"
        class="py-5 ma-1 fill-height"
        :class="
          $vuetify.theme.dark == true ? 'aura-card-dark' : 'aura-card-light'
        "
      >
        <div class="text-center">
          <v-avatar size="100">
            <img
              :src="getImgUrl(data.image, 'profile.jpg')"
              :lazy-src="getImgUrl(data.image, 'profile.jpg')"
              alt=""
            />
          </v-avatar>
          <p class="mt-3 mb-0 google-font mb-0" style="font-size: 110%">
            <b>{{ summeryText(data.name, 25) }}</b>
          </p>
          <p class="mt-0 mb-0 google-font mt-0" style="font-size: 80%">
            {{ summeryText(data.designation, 20) }}
          </p>
        </div>

        <socialMediaDetails class="text-center" :data="data.socialLinks" />
        <!-- <v-btn
          fab
          depressed
          shaped
          small
          color="black"
          dark
          class="float-right mt-n6 mr-4 mb-4"
        >
          <v-icon>mdi-arrow-top-right</v-icon>
        </v-btn> -->
      </div>
    </template>

    <v-card
      class="pa-md-8 pa-sm-8 pa-4 google-font"
      :class="theme.isDark ? 'grey darken-3' : 'white'"
      style="border-radius: 12px"
    >
      <v-avatar size="150" style="border-radius: 15px;">
        <img
          :src="getImgUrl(data.image, 'profile.jpg')"
          :lazy-src="getImgUrl(data.image, 'profile.jpg')"
          alt=""
        />
      </v-avatar>
      <v-btn @click="dialog = false" text small depressed fab class="float-right"><v-icon>mdi-close</v-icon></v-btn>
      <p class="mt-5 mb-0" style="font-size: 150%;font-weight: 600;">{{ data.name }}</p>
      <p class="google-font">{{ data.designation }}</p>

      <div v-if="data.bio.length">
        <p class="mb-1"><b>Bio:</b></p>
        <p class="google-font" style="font-size: 90%;">{{ data.bio }}</p>
      </div>
      <v-toolbar dense flat :color="this.$vuetify.theme.dark ? '#252726' : '#F5F8FC'" style="border-radius: 30px;">
        <socialMediaDetails class="pl-0 ml-0" :data="data.socialLinks" />
        <v-spacer></v-spacer>
        <v-btn class="aura-btn" dark rounded small depressed @click="goToTeam(data.id)"
          >See More Info</v-btn
        >
      </v-toolbar>
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
  },
};
</script>

