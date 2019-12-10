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
        v-for="cat in profiles.categories"
        :key="cat"
        :class="{'x-small': $vuetify.breakpoint.mdAndDown}"
        class="pa-2 ma-2"
        :to="{hash: make_linkable(cat)}"
      >{{cat}}</v-btn>
    </div>
    <v-sheet v-for="item in profiles.items" :key="item.category" class="ma-2 pa-2">
      <h2 :id="make_linkable(item.category)">{{ item.category }}</h2>
      <v-card
        flat
        v-for="(link, entry) in item.values"
        :key="link"
        class="ma-2"
        :href="link"
        target="_blank"
        outlined
      >
        <v-card-title class="headline break-word">{{ entry }}</v-card-title>
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
    }
  },
  computed: {
    moveForBottomNavStyle() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return "z-index: 10; bottom: 60px";
      } else {
        return "";
      }
    }
  }
};
</script>