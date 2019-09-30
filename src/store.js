import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [ 
      { text: 'Home', to: '/', icon:'mdi-home'},
      { text: 'Events', to: '/events', icon: 'mdi-assistant'},
      { text: 'Team', to: '/team', icon:'mdi-account-settings'},
      { text: 'About', to: '/about', icon: 'mdi-comment-alert-outline'},
      { text: 'Contact', to: '/contact', icon:'mdi-contacts'}
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
