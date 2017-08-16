import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'



const Home=resolve=>require(['@/components/Home'], resolve);


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: "home",
      component: Home,
    }
  ]
})
