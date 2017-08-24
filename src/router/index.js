import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'



const Home = resolve => require(['@/components/Home'], resolve);
const Friend = resolve => require(['@/components/Frirend'], resolve)
const Me = resolve => require(['@/components/Me'], resolve)
const Mymusic = resolve => require(['@/components/Mymusic'], resolve)
const Discover = resolve => require(['@/components/Discover'], resolve)
const Findrecommend = resolve => require(['@/components/Discover/findrecommend.vue'], resolve)
const Findsheet = resolve => require(['@/components/Discover/findsheet.vue'], resolve)
Vue.use(Router)

export default new Router({
  routes: [{
      // findmusic   第一页
      path: '*',
      component: Mymusic
    },

    {
      path: '/friend',
      name: "friend",
      component: Friend,
    }, {
      path: '/discover',
      name: "discover",
      component: Discover,
      
      children: [{
        // 第二页的第一个
        path: '/',
        redirect: '/discover/findrecommend'
      },
      {
        // findmusic   第一页
        path: 'findrecommend',
        component: Findrecommend
      },
      {
        // findmusic   第一页
        path: 'findsheet',
        component: Findsheet
      }
    ]
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