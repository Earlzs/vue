import Vue from 'vue'
import Router from 'vue-router'
import Index from '../component/Index.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:"is-active",
  routes: [
    {
      path:'/',
      component:Index
    },
    {
      path:'/register',
      component:resolve =>{
        require(['../component/Register.vue'],resolve)
      }
    },
 
    {
      path:"*",
      redirect:'/'
    }
  ]
})