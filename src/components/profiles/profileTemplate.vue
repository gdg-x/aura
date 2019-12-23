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
    <div class="ma-2" >
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
        <v-row align="center">
          <v-col cols="3">
            <v-row justify="center">
              <v-img
                v-show="entry.svg"
                :src="require('@/assets/img/svg/' + entry.svg + '.svg')"
                svg-inline
                style="max-width: 50px; max-height: 50px;"
                class="ml-4"
                contain
                align="center"
              />
            </v-row>
          </v-col>
          <v-col cols="9">
            <v-card-title class="headline break-word google-font">{{ entry.longName }}</v-card-title>
          </v-col>
        </v-row>
      </v-card>
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: {
    profiles: Object
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
    getByCategory(profiles, category) {
      var filteredProfiles = [];
      var i;
      var j;
      for (i = 0; i < profiles.length; i++) {
        for (j = 0; j < profiles[i].category.length; j++) {
          if (profiles[i].category[j] == category) {
            filteredProfiles.push(profiles[i]);
          }
        }
      }
      return filteredProfiles.sort(function(a, b) {
        if (a["longName"] > b["longName"]) {
          return 1;
        } else if (a["longName"] < b["longName"]) {
          return -1;
        }
        return 0;
      });
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
    categorized() {
      var categories = new Set();
      var i;
      var j;
      for (i = 0; i < this.profiles.length; i++) {
        for (j = 0; j < this.profiles[i].category.length; j++) {
          categories.add(this.profiles[i].category[j]);
        }
      }
      return Array.from(categories);
    }
  }
};
</script>