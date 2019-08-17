<template>
  <v-toolbar app color="white" height="55px" scroll-off-screen>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer" />

    <v-toolbar-title class="ml-0 pl-1 mr-1">
      <span class="google-font">{{ChapterDetails.ChapterName}}</span>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      v-for="(link, i) in links"
      :key="i"
      :to="link.to"
      class="ml-0 google-font hidden-sm-and-down"
      style="text-transform: capitalize;"
      flat
      @click="onClick($event, link)"
    >{{ link.text }}</v-btn>
    <v-btn
      :href="ChapterDetails.forum"
      target="_blank"
      class="ma-0 google-font elevation-1"
      color="#1a73e8"
      style="text-transform: capitalize;border-radius:5px;color:white"
    >Visit our Forum</v-btn>
  </v-toolbar>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
// Utilities
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      ChapterDetails: ChapterDetails
    };
  },
  computed: {
    ...mapGetters(["links"])
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    }
  }
};
</script>