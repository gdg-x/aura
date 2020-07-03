<template>
  <v-navigation-drawer
    app
    clipped
    floating
    v-model="eventDrawer"
    :class="this.$vuetify.theme.dark == true?'black':'grey lighten-5'"
  >
    <v-list dense shaped>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="'/events/'+$route.params.id+''+link.to"
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

      <v-divider class="my-2"></v-divider>

      <v-list-item to="/about" target="_blank" class="google-font my-0 py-0" color="primary">
        <v-list-item-content>
          <v-list-item-title v-text="'Community Guidlines'" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/about" target="_blank" class="google-font my-0 py-0" color="primary">
        <v-list-item-content>
          <v-list-item-title v-text="'Code of Conduct'" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/about" target="_blank"  class="google-font my-0 py-0" color="primary">
        <v-list-item-content>
          <v-list-item-title v-text="'About '+ config.generalConfig.name || ''" />
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
            style="text-decoration:none"
          >Aura</a>
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
        to: "/about",
        icon: "mdi-information-outline"
      },
      {
        text: "Speakers",
        to: "/speakers",
        icon: "mdi-account-multiple-outline"
      },
      {
        text: "Schedule",
        to: "/schedule",
        icon: "mdi-television-guide"
      },
      {
        text: "Partners",
        to: "/partners",
        icon: "mdi-currency-usd"
      },
      {
        text: "Team",
        to: "/team",
        icon: "mdi-account-box-outline"
      }
    ]
  }),
  computed: {
    ...mapState(["config"]),
    eventDrawer: {
      get() {
        return this.$store.state.eventDrawer;
      },
      set(val) {
        this.setEventDrawer(val);
      }
    }
  },
  methods: {
    ...mapMutations(["setEventDrawer"])
  }
};
</script>

<style>
</style>