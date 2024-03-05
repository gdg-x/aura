<template>
  <v-list
    subheader
    class="pa-1 px-0"
     flat
    :class="
      $vuetify.theme.dark
        ? 'aura-card-dark'
        : 'aura-card-light'
    "
  >
    <v-list-item class="" @click="goToTeam(data.id)">
      <v-list-item-avatar size="70" style="border-radius: 12px;">
        <img :src="getImgUrl(data.image, 'profile.jpg')" />
      </v-list-item-avatar>

      <v-list-item-content class="google-font">
        <p class=""><b>{{ data.name }}</b></p>
        <p class="mb-0" style="font-size: 80%;">{{ data.designation }}</p>
        <!-- <socialMediaDetails class="pl-0 ml-0" :data="data.socialLinks" /> -->
      </v-list-item-content>
    </v-list-item>

    <!-- <v-divider inset></v-divider> -->
  </v-list>
</template>

<script>
// import socialMediaDetails from "@/components/common/SocialInfo";
export default {
  props: ["data"],
  components: {
    // socialMediaDetails,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    goToTeam(id) {
      this.$router.push("/team/" + id);
    },
  },
  filters: {
    summary: (val, num) => {
      if (val.length > num) {
        return val.substring(0, num) + "..";
      } else {
        return val;
      }
    }
  },
};
</script>