<template>
  <v-navigation-drawer v-model="drawer" app width="300px" temporary>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="google-font" style="font-size: 130%">{{
          config.generalConfig.name || ""
        }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense shaped>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :href="link.href"
        @click="onClick($event, link)"
        class="google-font my-0 py-0"
        color="primary"
      >
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      
      <p class="google-font ma-2" style="font-size: 90%">
        Based on <br>
        <span class="aura-text">
          Project
          <a
            href="https://github.com/gdg-x/aura/"
            target="_blank"
            rel="noreferrer"
            style="text-decoration: none"
            class="aura-text"
          >
            Aura</a
          >
        </span>
      </p>
    </template>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "CoreDrawer",
  data() {
    return {};
  },
  computed: {
    ...mapState(["config"]),
    ...mapGetters(["links"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.setDrawer(val);
      },
    },
  },
  methods: {
    ...mapMutations(["setDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to === "/") {
        this.$vuetify.goTo(0);
        this.setDrawer(false);
        return;
      }
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
      this.setDrawer(false);
    },
  },
};
</script>