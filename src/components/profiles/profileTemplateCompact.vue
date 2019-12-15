<template>
  <v-container fluid>
    <v-row align="center" v-for="item in profiles.items" :key="item.category" dense no-gutters>
      <v-col cols="2" v-show="$vuetify.breakpoint.smAndUp">
        <v-card outlined color="blue" class="ma-2 pa-2">
          <v-card-title
            class="ma-n4 subtitle1 break-word justify-center text-center"
            style="color:white"
          >{{item.category}}</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="10">
        <v-container>
          <v-row dense no-gutters align="center">
            <v-col cols="auto" v-show="$vuetify.breakpoint.xs">
              <v-card color="blue" class="ma-4 pa-2">
                <v-card-title
                  class="ma-n4 subtitle1 break-word justify-center text-center"
                  style="color:white"
                >{{item.category}}</v-card-title>
              </v-card>
            </v-col>
            <v-col cols="auto" v-for="entry in item.values" :key="entry">
              <v-card elevation="0" :href="entry.link" target="_blank">
                <v-card-title class="my-n3" style="font-size:90%">{{entry.shortName}}</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

    </v-row>
  </v-container>
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
    printbp() {
        console.log(this.$vuetify.breakpoint)
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
}
</style>