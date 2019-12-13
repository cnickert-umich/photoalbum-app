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
    path: '/albums',
    name: 'albums',
    component: () => import('../views/AlbumsView.vue')
  },
  {
    path: '/albums/new',
    name: 'albums_new',
    component: () => import('../components/AlbumEdit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active"
})

export default router
