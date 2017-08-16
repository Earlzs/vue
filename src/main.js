// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'lib-flexible'
import 'font-awesome/css/font-awesome.min.css'
import './styles/base.scss'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.axios = axios 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
