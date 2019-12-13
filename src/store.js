import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    showFutureTraining: false,
    items: [
      {
        text: "Home",
        to: "/",
        icon: "mdi-home",
        meta: {
          showToolbar: true,
          enabled: true,
          showBottomNav: false
        }
      },
      {
        text: "Validation",
        to: "/validation",
        icon: "mdi-thumb-up",
        meta: {
          showToolbar: true,
          enabled: true,
          showBottomNav: true
        }
      },
      {
        text: "Hardening",
        to: "/hardening",
        icon: "mdi-security",
        meta: {
          showToolbar: true,
          enabled: true,
          showBottomNav: true
        }
      },
      {
        text: "Visualization",
        to: "/visualization",
        icon: "mdi-image-search",
        meta: {
          showToolbar: true,
          enabled: false,
          showBottomNav: true
        }
      },
      {
        text: "Getting Started",
        to: "/gettingstarted",
        icon: "mdi-chair-school",
        meta: {
          showToolbar: true,
          enabled: true,
          showBottomNav: true
        }
      },
      {
        text: "Training",
        to: "/training",
        icon: "mdi-chair-school",
        meta: {
          showToolbar: true,
          enabled: true,
          showBottomNav: true
        }
      }
    ]
  },
  getters: {
    links: state => {
      return state.items;
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {}
});
