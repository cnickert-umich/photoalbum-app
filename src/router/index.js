import Vue from 'vue'
import VueRouter from 'vue-router'
import ManageHome from '../views/ManageHome.vue'
import AlbumDetails from '../views/AlbumDetails.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import ClientView from '../views/ClientView.vue'

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
    name: 'client',
    component: ClientView
  },
  {
    path: '/manage',
    name: 'manage',
    component: ManageHome
  },
  {
    path: '/manage/login',
    name: 'login',
    component: Login
  },
  {
    path: '/manage/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/manage/albums',
    name: 'albums',
    component: () => import('../views/AlbumsView.vue')
  },
  {
    path: '/manage/albums/new',
    name: 'albums_new',
    component: () => import('../components/AlbumEdit.vue')
  },
  {
    path: '/manage/upload',
    name: 'upload',
    component: () => import('../views/UploadView.vue')
  },
  {
    path: '/manage/album/:id/photos',
    name: 'album_details',
    component: AlbumDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active"
})

export default router
