import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [ 
      { text: 'Acceuil', to: '/', icon:'home'},
      { text: 'Événements', to: '/events', icon: 'rounded_corner'},
      { text: 'Équipe', to: '/team', icon:'group'},
      { text: 'À propos', to: '/about', icon: 'toc'},
      { text: 'Contact', to: '/contact', icon:'person'}
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
