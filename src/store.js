import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      { text: 'Home', to: '/', icon: 'home' },
      { text: 'Events', to: '/events', icon: 'rounded_corner' },
      { text: 'Team', to: '/team', icon: 'group' },
      { text: 'About', to: '/about', icon: 'toc' },
      { text: 'Contact', to: '/contact', icon: 'person' }
    ],
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    links: (state) => {
      return state.items
    },
    user: (state) => {
      return state.user
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    setLoggedIn(state, value) {
      state.user.loggedIn = value;
    },
    setUser(state, payload) {
      state.user.data = payload;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("setLoggedIn", user !== null);
      if (user) {
        commit("setUser", {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        });
      } else {
        commit("setUser", null);
      }
    }
  }
})
