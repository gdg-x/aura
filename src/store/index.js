import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/config/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
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
      }
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
  },
  modules: {
  },
  actions:{
    GetMetaData(){
      return new Promise((resolve,reject)=>{
        firebase.firestore.collection("config")
        .get()
        .then(doc => {
          console.log(doc)
          if (!doc.exists) {
            console.log('Not Exist')
          }
          // doc = doc.data();
          if (Object.keys(doc).length > 0) {
            resolve(doc)
          }
        })
        .catch(e => {
          reject(e)
        });
      })
    },

  
  }
  
})

