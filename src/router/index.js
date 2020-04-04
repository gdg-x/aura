import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'Home ',
      color:'#0277bd',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      title:'About ',
      color:'#0277bd',
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue'),
    meta:{
      title:'Team ',
      color:'#0277bd',
    }
  },
  {
    path: '/team/:id',
    name: 'Team Details',
    component: () => import(/* webpackChunkName: "team-details" */ '../views/Team/TeamDetails.vue'),
    meta:{
      title:'Team Details',
      color:'#0277bd',
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue'),
    meta:{
      title:'Events ',
      color:'#0277bd',
    }
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/Speakers.vue'),
    meta:{
      title:'Speakers ',
      color:'#0277bd',
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta:{
      title:'Contact ',
      color:'#0277bd',
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import(/* webpackChunkName: "blogs" */ '../views/Blogs.vue'),
    meta:{
      title:'Blogs ',
      color:'#0277bd',
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

export default router
