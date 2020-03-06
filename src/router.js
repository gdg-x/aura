import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import communityData from "./assets/data/communityData.json";
import goTo from 'vuetify/es5/services/goto';

Vue.use(Router);

const router = new Router({
//  mode: "history",
//  base: process.env.BASE_URL,
  scrollBehavior(to) {
    let scrollTo = 0
    if (to.hash) {
      scrollTo = to.hash
    } else {
      scrollTo = 0
    }
    return goTo(scrollTo, { 'duration': 0 })
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home | " + communityData.communityName,
        color: "#0277bd",
        requiresAuth: false
      }
    },
        {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
      meta: {
        title: "About | " + communityData.communityName,
        color: "#0277bd",
        requiresAuth: false
      }
    },
    {
      path: "/events",
      name: "events",
      component: () => import("./views/Events.vue"),
      meta: {
        title: "Events | " + communityData.communityName,
        color: "#0277bd",
        requiresAuth: false
      }
    },
    {
      path: "/team",
      name: "team",
      component: () => import("./views/Team.vue"),
      meta: {
        title: "Team | " + communityData.communityName,
        color: "#0277bd",
        requiresAuth: false
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue"),
      meta: {
        title: "Contact | " + communityData.communityName,
        color: "#0277bd",
        requiresAuth: false
      }
    },
    {
      path: "/partners",
      name: "partners",
      component: () => import("./views/Partners.vue"),
      meta: {
        title: "Partners | " + communityData.communityName,
        color: "#0277bd",
        requiresAuth: false
      }
    },
    {
      path: "/events/:id",
      name: "event-data",
      component: () => import("./views/Events/EventTemplate.vue"),
      meta: {
        title: "Event Name | " + communityData.communityName,
        color: "#0277bd",
        requiresAuth: false
      }
    },
    {
      path: '/team/:id',
      name: 'team-details',
      component: () => import( './views/ViewTeam.vue'),
      meta:{
        title:'Team | '+communityData.CommunityName,
        color:'#0277bd',
        requiresAuth:false
      }
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/Admin/login"),
      meta: {
        title: `Admin Login | ${communityData.communityName}`,
        color: "#0277bd",
        requiresAuth: false
      }
    },
    {
      path: "/dashboard",
      name: "admin-dashhboard",
      component: () => import("@/views/Admin/dashboard"),
      meta: {
        title: `Admin Dashboard | ${communityData.communityName}`,
        color: "#0277bd",
        requiresAuth: true
      }
    },
    {
      path: "/validation",
      name: "validation",
      component: () => import("@/views/Validation.vue"),
      meta: {
        title: `Validation Profiles | ${communityData.communityName}`,
        color: "#0277bd",
        requiresAuth: false
      }
    },
    {
      path: "/hardening",
      name: "hardening",
      component: () => import("@/views/Hardening.vue"),
      meta: {
        title: `Hardening Profiles | ${communityData.communityName}`,
        color: "#0277bd",
        requiresAuth: false
      }
    },
    {
      path: "/gettingstarted",
      name: "gettingstarted",
      component: () => import("@/views/GettingStarted.vue"),
      meta: {
        title: `Getting Started | ${communityData.communityName}`,
        color: "#0277bd",
        requiresAuth: false
      }
    },
    {
      path: "/training",
      name: "training",
      component: () => import("@/views/Training.vue"),
      meta: {
        title: `Training | ${communityData.communityName}`,
        color: "#0277bd",
        requiresAuth: false
      }
    },    
    {
      path:'/admin/dashboard/events',
      name:"admin-events",
      component:()=> import('@/views/Admin/Events'),
      meta:{
        title:`Admin Dashboard | ${communityData.CommunityName}`,
        color:"#0277bd",
        requiresAuth: true,
      }
    },
    {
      path:'/admin/dashboard/team',
      name:"admin-team",
      component:()=> import('@/views/Admin/Team'),
      meta:{
        title:`Admin Dashboard | ${communityData.CommunityName}`,
        color:"#0277bd",
        requiresAuth: true,
      }
    },
    {
      path:'/admin/dashboard/team/:id',
      name:"admin-team-member",
      component:()=> import('@/views/Admin/Team/showTeam'),
      meta:{
        title:`Admin Dashboard | ${communityData.CommunityName}`,
        color:"#0277bd",
        requiresAuth: true,
      }
    },
    {
      path:'/admin/dashboard/speaker',
      name:"admin-speakers",
      component:()=> import('@/views/Admin/Speaker'),
      meta:{
        title:`Admin Dashboard | ${communityData.CommunityName}`,
        color:"#0277bd",
        requiresAuth: true,
      }
    },
    {
      path:'/admin/dashboard/speaker/:id',
      name:"admin-speaker-member",
      component:()=> import('@/views/Admin/Speaker/viewSpeaker'),
      meta:{
        title:`Admin Dashboard | ${communityData.CommunityName}`,
        color:"#0277bd",
        requiresAuth: true,
      }
    },
    {
      path: '*',
      name: 'redirect',
      redirect: { path: '/' },
      meta:{
        title:`Redirect | ${communityData.CommunityName}`,
        color:"#0277bd",
        requiresAuth: false,
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  // const user = firebase.auth.currentUser;
  // const requiresAuth = to.matched.some(record=> record.meta.requiresAuth);
  if (to.meta.title) {
    document.title = to.meta.title;
    // let metaThemeColor = document.querySelector("meta[name=theme-color]");
    // metaThemeColor.setAttribute("content", to.meta.color);
    // // if(this.$vuetify.theme.dark){
    // //   metaThemeColor.setAttribute("content", '#616161');
    // // }else{

    // // }
  }
  // if(requiresAuth && !user) next('admin')
  // else if(!requiresAuth && user) next('dashboard')
  // else next()
  next();
});

export default router;
