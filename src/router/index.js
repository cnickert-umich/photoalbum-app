import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../node_modules/mdbootstrap/css/bootstrap.css';
import '../../node_modules/mdbootstrap/css/mdb.css';

import '../../node_modules/mdbootstrap/js/jquery.js';
import '../../node_modules/mdbootstrap/js/popper.js';
import '../../node_modules/mdbootstrap/js/bootstrap.js';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active"
})

export default router
