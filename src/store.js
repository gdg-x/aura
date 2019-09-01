import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/functions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    firebase,
    items: [
      { text: "Home", to: "/", icon: "home" },
      { text: "Events", to: "/events", icon: "rounded_corner" },
      { text: "Team", to: "/team", icon: "group" },
      { text: "About", to: "/about", icon: "toc" },
      { text: "Contact", to: "/contact", icon: "person" }
    ]
  },
  getters: {
    links: state => {
      return state.items;
    },
    functions: state => {
      return state.firebase.functions();
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {}
});
