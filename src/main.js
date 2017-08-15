import Vue from 'vue'
import App from './App.vue'
import router from './Router/routers'


// import './assets/css/font-awesome.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
