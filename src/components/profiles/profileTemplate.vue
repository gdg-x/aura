<template>
  <div>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
      :style="moveForBottomNavStyle"
    >
      <v-icon>mdi-arrow-up-bold-circle-outline</v-icon>
    </v-btn>
    <div class="ma-2">
      <v-btn
        v-for="cat in categorized"
        :key="cat"
        :class="{'x-small': $vuetify.breakpoint.mdAndDown}"
        class="pa-2 ma-2 google-font"
        :to="{hash: make_linkable(cat)}"
      >{{cat}}</v-btn>
    </div>
    <v-sheet v-for="cat in categorized" :key="cat" class="ma-2 pa-2 google-font">
      <h2 :id="make_linkable(cat)">{{ cat }}</h2>
      <v-card
        flat
        v-for="entry in getByCategory(profiles, [cat])"
        :key="entry"
        class="ma-2"
        :href="entry.link"
        target="_blank"
        outlined
      >
        <v-card-title class="headline break-word google-font">{{ entry.longName }}</v-card-title>
      </v-card>
    </v-sheet>
  </div>
</template>

<script>

export default {
  props: {
    profiles: profiles
  },
  data() {
    return {
      fab: false
    };
  },
  methods: {
    make_linkable(str) {
      return str.replace(/\s+/g, "-").toLowerCase();
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 200;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    getByCategory(profiles, categories) {
      var filteredProfiles = [];
      var i;
      var j;
      for (i = 0; i < profiles.profiles.length; i++) {
        for (j = 0; j < categories.length; j++) {
          if (profiles.profiles[i].category == categories[j]) {
            filteredProfiles.push(profiles.profiles[i])
          }
        }  
      }
      return filteredProfiles
    }
  },
  computed: {
    moveForBottomNavStyle() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return "z-index: 10; bottom: 60px";
      } else {
        return "";
      }
    },
    categorized(profiles) {
      var categories = new Set();
      var i;
      for (i = 0; i < this.profiles.profiles.length; i++) {
        categories.add(this.profiles.profiles[i].category);
      }
      return Array.from(categories);
    }
  }
};
</script>