import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/config/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    eventDrawer: true,
    config: {
      generalConfig: {
        socialLinks:{}
      },
      keysandsecurity: {},
      footerConfig: {},
    },
    items: [{
        text: 'Home',
        to: '/',
        icon: 'mdi-circle-double',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Events',
        to: '/events',
        icon: 'mdi-flag-outline',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Team',
        to: '/team',
        icon: 'mdi-account-group-outline',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Speakers',
        to: '/speakers',
        icon: 'mdi-account-multiple-outline',
        meta: {
          showToolbar: true,
          showBottomNav: false
        },
      },
      {
        text: 'About',
        to: '/about',
        icon: 'mdi-lightbulb-outline',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Contact',
        to: '/contact',
        icon: 'mdi-card-account-mail-outline',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Partners',
        to: '/partners',
        icon: 'mdi-currency-usd',
        meta: {
          showToolbar: false,
          showBottomNav: false
        },
      },
      {
        text: 'Blogs',
        to: '/blogs',
        icon: 'mdi-newspaper-variant-multiple-outline',
        meta: {
          showToolbar: true,
          showBottomNav: false
        },
      }
    ]
  },
  getters: {
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    setEventDrawer: (state, payload) => (state.eventDrawer = payload),
    toggleEventDrawer: state => (state.eventDrawer = !state.eventDrawer),
    setGeneralConfig: (state, payload) => (state.config.generalConfig = payload, localStorage.setItem('name', payload.name )),
    setKeysAndSecutityConfig: (state, payload) => (state.config.keysandsecurity = payload),
    setFooterConfig: (state, payload) => (state.config.footerConfig = payload),
  },
  modules: {},
  actions: {}

})