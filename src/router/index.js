import Vue from 'vue'
import VueRouter from 'vue-router'
import Testblog from '../components/testblog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/list',
    name: 'Testblog',
    component: Testblog
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/main.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
