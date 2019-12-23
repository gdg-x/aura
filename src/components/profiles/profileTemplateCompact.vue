<template>
  <v-content>
    <v-card v-for="cat in categorized" :key="cat" outlined class="ma-2">
      <v-row align="center" dense no-gutters justify="start">
        <v-col cols="2" v-show="$vuetify.breakpoint.smAndUp">
          <h2
            class="font-weight-bold ma-2 pa-2 break-word justify-center text-center google-font"
            :class="{'subtitle-2': $vuetify.breakpoint.mdAndDown}"
          >{{ cat }}</h2>
        </v-col>
        <v-col cols="10">
          <v-container>
            <v-row dense no-gutters align="center" justify="start">
              <v-col cols="auto" v-show="$vuetify.breakpoint.xs">
                <h2
                  class="font-weight-bold subtitle-2 ma-2 pa-2 break-word justify-center text-left google-font"
                >{{ cat }}
                </h2>
              </v-col>
              <v-col cols="auto">
                <v-chip
                  v-for="entry in getByCategory(profiles, [cat])"
                  :key="entry"
                  :href="entry.link"
                  target="_blank"
                  class="google-font break-word ma-2 pa-2 text-none"
                  label
                  outlined
                >
                  {{ entry.shortName }}
                  <v-icon v-if="entry.icon" right dark :class="entry.icon">{{ entry.icon }}</v-icon>
                  <v-img
                      v-if="entry.svg"
                      :src="require('@/assets/img/svg/' + entry.svg + '.svg')"
                      svg-inline
                      style="max-width: 14px; max-height: 14px;"
                      class="ml-2"
                      contain
                    /> 

                </v-chip>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </v-content>
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
      for (i = 0; i < profiles.profiles.length; i++) {
        for (j = 0; j < profiles.profiles[i].category.length; j++) {
          if (profiles.profiles[i].category[j] == category) {
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
    categorized() {
      var categories = new Set();
      var i;
      var j;
      for (i = 0; i < this.profiles.profiles.length; i++) {
        for (j = 0; j < this.profiles.profiles[i].category.length; j++) {
          categories.add(this.profiles.profiles[i].category[j]);
        }
      }
      return Array.from(categories);
    }
  }
};
</script>

<style scoped>
.div {
  max-width: 1000px;
}
.v-chip__content {
  white-space: nowrap;
}
</style>