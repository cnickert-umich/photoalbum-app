import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/mdbootstrap/css/bootstrap.css';
import '../node_modules/mdbootstrap/css/mdb.css';

import '../node_modules/mdbootstrap/js/jquery.js';
import '../node_modules/mdbootstrap/js/popper.js';
import '../node_modules/mdbootstrap/js/bootstrap.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
