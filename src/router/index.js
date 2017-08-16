import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'



const Home=resolve=>require(['@/components/Home'], resolve);
const Friend=resolve=>require(['@/components/Frirend'],resolve)
const Me=resolve=>require(['@/components/Me'],resolve)
const Mymusic=resolve=>require(['@/components/Mymusic'],resolve)
const Discover=resolve=>require(['@/components/Discover'],resolve)
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/friend',
      name: "friend",
      component: Friend,
    }, {
      path: '/discover',
      name: "discover",
      component: Discover,
    }, {
      path: '/mymusic',
      name: "mymusic",
      component: Mymusic,
    }, {
      path: '/me',
      name: "me",
      component: Me,
    }
  ]
})
