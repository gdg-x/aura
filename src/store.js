import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    adminDrawer:true,
    adminLinks:[
      { 
        text: 'Home', 
        to: '/admin/dashboard/home', 
        icon:'mdi-home', 
        meta:{
          showToolbar: false,
          showBottomNav: true
        }, 
      },
      { 
        text: 'Events', 
        to: '/admin/dashboard/events', 
        icon: 'mdi-assistant', 
        meta:{
          showToolbar: false,
          showBottomNav: true
        }, 
      },
      { 
        text: 'Team', 
        to: '/admin/dashboard/team', 
        icon: 'mdi-assistant', 
        meta:{
          showToolbar: false,
          showBottomNav: true
        }, 
      }
    ],
    items: [ 
      { 
        text: 'Home', 
        to: '/', 
        icon:'mdi-home', 
        meta:{
          showToolbar: true,
          showBottomNav: true
        }, 
      },
      { 
        text: 'Events', 
        to: '/events', 
        icon: 'mdi-assistant', 
        meta:{
          showToolbar: true,
          showBottomNav: true
        }, 
      },
      { 
        text: 'Team', 
        to: '/team', icon:'mdi-account-settings',
        meta:{
          showToolbar: true,
          showBottomNav: true
        }, 
      },
      { 
        text: 'About', 
        to: '/about', 
        icon: 'mdi-comment-alert-outline',
        meta:{
          showToolbar: true,
          showBottomNav: true
        }, 
      },
      { 
        text: 'Contact', 
        to: '/contact', 
        icon:'mdi-contacts',
        meta:{
          showToolbar: true,
          showBottomNav: true
        }, 
      },
      { 
        text: 'Partners', 
        to: '/partners', 
        icon:'mdi-currency-usd',
        meta:{
          showToolbar: false,
          showBottomNav: false
        }, 
      },
      { 
        text: 'Blogs', 
        to: '/blogs', 
        icon:'mdi-blogger',
        meta:{
          showToolbar: true,
          showBottomNav: false
        }, 
      },
      { 
        text: 'Admin', 
        to: '/admin', 
        icon:'mdi-account-key',
        meta:{
          showToolbar: false,
          showBottomNav: false
        }, 
      }
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    },
    AdminLinks: (state) => {
      return state.adminLinks
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    
    // For Admin
    ADsetDrawer: (state, payload) => (state.adminDrawer = payload),
    ADtoggleDrawer: state => (state.adminDrawer = !state.adminDrawer)
  },
  actions: {

  }
})
