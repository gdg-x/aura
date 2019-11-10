import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import communitydata from './assets/data/communitydata.json'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title:'Home | '+communitydata.CommunityName,
        color:'#0277bd'
      }
    },
    {
      path: '*',
      name: 'home',
      component: Home,
      meta:{
        title:'Home | '+communitydata.CommunityName,
        color:'#0277bd'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        title:'Home | '+communitydata.CommunityName,
        color:'#0277bd'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( './views/About.vue'),
      meta:{
        title:'About | '+communitydata.CommunityName,
        color:'#0277bd'
      }
    },
    {
      path: '/events',
      name: 'events',
      component: () => import( './views/Events.vue'),
      meta:{
        title:'Events | '+communitydata.CommunityName,
        color:'#0277bd'
      },
    },
    {
      path: '/team',
      name: 'team',
      component: () => import( './views/Team.vue'),
      meta:{
        title:'Team | '+communitydata.CommunityName,
        color:'#0277bd'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import( './views/Contact.vue'),
      meta:{
        title:'Contact | '+communitydata.CommunityName,
        color:'#0277bd'
      }
    },
    {
      path: '/partners',
      name: 'partners',
      component: () => import( './views/Partners.vue'),
      meta:{
        title:'Partners | '+communitydata.CommunityName,
        color:'#0277bd'
      }
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import( './views/Blogs.vue'),
      meta:{
        title:'Blogs | '+communitydata.CommunityName,
        color:'#0277bd'
      }
    },
    {
      path: '/events/:id',
      name: 'event-data',
      component: () => import( './views/Events/EventTemplate.vue'),
      meta:{
        title:'Event Name | '+communitydata.CommunityName,
        color:'#0277bd'
      },
    },
  ]
})

router.beforeEach((to, from, next)=>{
  if(to.meta.title){
    document.title = to.meta.title
    // let metaThemeColor = document.querySelector("meta[name=theme-color]");
    // metaThemeColor.setAttribute("content", to.meta.color);
    // // if(this.$vuetify.theme.dark){
    // //   metaThemeColor.setAttribute("content", '#616161');
    // // }else{
      
    // // }
  }
  next()
})

export default router