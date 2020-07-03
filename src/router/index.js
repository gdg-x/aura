import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: 'Home ',
      color: '#0277bd',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About ',
      color: '#0277bd',
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import( /* webpackChunkName: "team" */ '../views/Team.vue'),
    meta: {
      title: 'Team ',
      color: '#0277bd',
    }
  },
  {
    path: '/team/:id',
    name: 'Team Details',
    component: () => import( /* webpackChunkName: "team-details" */ '../views/Team/TeamDetails.vue'),
    meta: {
      title: 'Team Details',
      color: '#0277bd',
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import( /* webpackChunkName: "events" */ '../views/Events.vue'),
    meta: {
      title: 'Events ',
      color: '#0277bd',
    }
  },
  // {
  //   path: '/events/:id',
  //   name: 'Events-Details',
  //   component: () => import( /* webpackChunkName: "events-details" */ '../views/Events/EventDetails.vue'),
  //   meta: {
  //     title: 'Events ',
  //     color: '#0277bd',
  //   }
  // },
  {
    path:'/events/:id',
    name:'CustomEvent',
    component:()=>import( /* webpackChunkName: "CustomEvent" */ '../views/Events/MainView.vue'),
    children: [
      {
        // when /event/:id/ is matched
        path: 'about',
        name:"CustomEventHome",
        component: ()=> import(/* webpackChunkName: "CustomEventAbout" */ '../views/Events/About.vue'),
        meta: {
          isEvent:true
        }
      },
      {
        // when /event/:id/ is matched
        path: 'speakers',
        name:"CustomEventSpeaker",
        component: ()=> import(/* webpackChunkName: "CustomEventSpeaker" */ '../views/Events/Speaker.vue'),
        meta: {
          isEvent:true
        }
      },
      {
        // when /event/:id/ is matched
        path: 'team',
        name:"CustomEventTeam",
        component: ()=> import(/* webpackChunkName: "CustomEventTeam" */ '../views/Events/Team.vue'),
        meta: {
          isEvent:true
        }
      },
      {
        // when /event/:id/ is matched
        path: 'schedule',
        name:"CustomEventSchedule",
        component: ()=> import(/* webpackChunkName: "CustomEventSchedule" */ '../views/Events/Schedule.vue'),
        meta: {
          isEvent:true
        }
      },
      {
        // when /event/:id/ is matched
        path: 'partners',
        name:"CustomEventPartners",
        component: ()=> import(/* webpackChunkName: "CustomEventPartners" */ '../views/Events/Partners.vue'),
        meta: {
          isEvent:true
        }
      },
      {
        path: '',
        name: 'redirectCustomEvent',
        redirect: {
          path: 'about'
        },
        meta: {
          isEvent:true
        }
      },
    ]
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: () => import( /* webpackChunkName: "speakers" */ '../views/Speakers.vue'),
    meta: {
      title: 'Speakers ',
      color: '#0277bd',
    }
  },
  {
    path: '/speakers/:id',
    name: 'Speakers-Details',
    component: () => import( /* webpackChunkName: "speakers-details" */ '../views/Speakers/SpeakerDetails.vue'),
    meta: {
      title: 'Speakers ',
      color: '#0277bd',
    }
  },
  {
    path: '/volunteers',
    name: 'Volunteers',
    component: () => import( /* webpackChunkName: "volunteer" */ '../views/Volunteer.vue'),
    meta: {
      title: 'Volunteers ',
      color: '#0277bd',
    }
  },
  {
    path: '/partners',
    name: 'Partners',
    component: () => import( /* webpackChunkName: "partners" */ '../views/Partners.vue'),
    meta: {
      title: 'Partners ',
      color: '#0277bd',
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( /* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {
      title: 'Contact ',
      color: '#0277bd',
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import( /* webpackChunkName: "blogs" */ '../views/Blogs.vue'),
    meta: {
      title: 'Blogs ',
      color: '#0277bd',
    }
  },
  {
    path: '*',
    name: 'redirect',
    redirect: {
      path: '/'
    },
    meta: {
      title: `Redirect `,
      color: "#0277bd",
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router