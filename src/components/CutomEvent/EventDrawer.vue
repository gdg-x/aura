<template>
  <v-navigation-drawer
    app
    width="100px"
    :color="this.$vuetify.theme.dark ? '#252726' : '#F5F7F7'"
    class="text-center"
    v-model="eventDrawer"
    floating
    clipped-left
  >
    <v-avatar class="my-4" :color="this.$vuetify.theme.dark? '#999999' :'#F5F7F7' ">
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
              font-size: 10px;
              text-transform: capitalize;
              font-weight: 600;
            "
            class="mb-0 mt-4 google-font"
            >{{ link.text }}</span
          >
        </div>
      </v-btn>
    </v-list>
    <template v-slot:append>
      <v-btn
        icon
        v-on:click="darkMode"
        class="pa-4 my-5"
        x-large
        aria-label="Theme Switch BTN"
      >
        <v-icon v-if="$vuetify.theme.dark">mdi-brightness-7</v-icon>
        <v-icon v-else>mdi-brightness-4</v-icon>
      </v-btn>
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
      },
    },
  },
  methods: {
    ...mapMutations(["setEventDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
    darkMode() {
      let metaThemeColor = document.querySelector("meta[name=theme-color]");

      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (localStorage)
        localStorage.setItem("darkMode", this.$vuetify.theme.dark);
      if (this.$vuetify.theme.dark) {
        metaThemeColor.setAttribute("content", "#212121");
      } else {
        metaThemeColor.setAttribute("content", "#0277bd");
      }
    },
  },
};
</script>