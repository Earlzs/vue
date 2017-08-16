import Vue from 'vue'
import App from './App.vue'
import router from './Router/routers'

import 'jquery/dist/jquery.min.js'
// import ''
 import 'lib-flexible'
// import './assets/css/font-awesome.css'         // ------------1
import 'font-awsome/css/font-awesome.css'   //-------------2
 
// require('font')


import './assets/css/style.css'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
