<template>
  <v-navigation-drawer v-model="drawer" app width="300px" temporary>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title
          class="google-font"
          style="font-size:130%"
        >{{config.generalConfig.name || '' }}</v-list-item-title>
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
          <v-icon v-text="link.icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="link.text" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
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
      }
    }
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
    }
  }
};
</script>