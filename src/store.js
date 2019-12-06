import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      {
        text: "Home",
        to: "/",
        icon: "mdi-home",
        meta: {
          showToolbar: true,
          showBottomNav: true
        }
      },
      {
        text: "Validation",
        to: "/validation",
        icon: "mdi-home",
        meta: {
          showToolbar: true,
          showBottomNav: true
        }
      },     
      {
        text: "Hardening",
        to: "/hardening",
        icon: "mdi-home",
        meta: {
          showToolbar: true,
          showBottomNav: true
        }
      }

      // {
      //   text: 'Blogs',
      //   to: '/blogs',
      //   icon:'mdi-blogger',
      //   meta:{
      //     showToolbar: true,
      //     showBottomNav: false
      //   },
      // },
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
