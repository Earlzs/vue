<template>
<div id="app">
  <transition name="bounce" mode="out-in">
    <router-view></router-view>
  </transition>
  <v-footer></v-footer>
</div>
</template>

<script>
import footer from './components//Footer.vue';


export default {
  name: 'app',
  components: {
    'v-footer': footer,
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

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
