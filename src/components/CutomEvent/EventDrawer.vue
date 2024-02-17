<template>
  <v-navigation-drawer
    app
    width="100px"
    :color="this.$vuetify.theme.dark ? '#252726' : '#F5F7F7'"
    class="text-center"
    v-model="eventDrawer"
  >
    <v-avatar class="my-4">
      <v-img
        alt="Community Logo"
        class="shrink google-font"
        contain
        :src="config.generalConfig.toolbarImage"
        transition="scale-transition"
        width="45"
      />
    </v-avatar>
    <v-list>
      <v-btn
        depressed
        class="px-0 py-8 mb-2"
        style="border-radius: 16px"
        v-for="(link, i) in links"
        :key="i"
        @click="onClick($event, link)"
        :to="'/events/' + $route.params.id + '' + link.to"
      >
        <div>
          <v-icon style="display: block" size="24" class="mb-1">{{
            link.icon
          }}</v-icon>
          <span
            style="
              font-size: 11px;
              text-transform: capitalize;
              font-weight: 600;
            "
            class="mb-0 mt-4 google-font"
            >{{ link.text }}</span
          >
        </div>
      </v-btn>
    </v-list>
    <v-list dense shaped>
      <v-divider class="my-2"></v-divider>

      <v-list-item
        to="/about"
        target="_blank"
        class="google-font my-0 py-0"
        color="primary"
      >
        <v-list-item-content>
          <v-list-item-title v-text="'Community Guidlines'" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        to="/about"
        target="_blank"
        class="google-font my-0 py-0"
        color="primary"
      >
        <v-list-item-content>
          <v-list-item-title v-text="'Code of Conduct'" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        to="/about"
        target="_blank"
        class="google-font my-0 py-0"
        color="primary"
      >
        <v-list-item-content>
          <v-list-item-title
            v-text="'About ' + config.generalConfig.name || ''"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pl-2">
        <p class="subtitle-2 google-font">
          Based on Project
          <a
            href="https://github.com/gdg-x/aura/"
            target="_blank"
            style="text-decoration: none"
            >Aura</a
          >
        </p>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "eventDrawer",
  data: () => ({
    links: [
      {
        text: "About",
        to: "/",
        icon: "mdi-information-outline",
      },
      {
        text: "Speakers",
        to: "/speakers",
        icon: "mdi-account-multiple-outline",
      },
      {
        text: "Schedule",
        to: "/schedule",
        icon: "mdi-television-guide",
      },
      {
        text: "Partners",
        to: "/partners",
        icon: "mdi-currency-usd",
      },
      {
        text: "Team",
        to: "/team",
        icon: "mdi-account-box-outline",
      },
    ],
  }),
  computed: {
    ...mapState(["config"]),
    eventDrawer: {
      get() {
        return this.$store.state.eventDrawer;
      },
      set(val) {
        this.setEventDrawer(val);
      },
    },
  },
  methods: {
    ...mapMutations(["setEventDrawer"]),
  },
};
</script>

<style>
</style>