<template>
<div id="app">
  <v-header></v-header>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  <v-footer></v-footer>
  <v-sidebar></v-sidebar>
</div>
</template>

<script>
import footer from './components/Footer.vue'
import header from './components/Header.vue'
import sidebar from './components/SideBar.vue'
import store from './store'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    'v-footer': footer,
    'v-header': header,
    'v-sidebar': sidebar
  },

  created() {
    let LocalApi = 'static/data.json'
    axios.get(LocalApi).then((res) => {
      // this.info=res.data.user
      store.dispatch('set_MusicAllList', res.data.music)
      console.log(res.data.music)
    })
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  height: 100%;
  width: 100%;
}


/*组件切换的动画*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
  opacity: 0
}
</style>
