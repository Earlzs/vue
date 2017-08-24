<template>
<div id="app">
  <audio id="myaudio" ref="audio" @playing="musicOnPlaying" @canplay="musicCanPlay" @timeupdate='musicTimeUpdate' @ended='musicEnded'  @loadstart="loadStart"></audio>
  <v-header></v-header>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  <v-footer></v-footer>
  <v-sidebar></v-sidebar>
  <v-detail></v-detail>
  <v-songlist></v-songlist>
</div>
</template>

<script>
import footer from './components/Footer.vue'
import header from './components/Header.vue'
import sidebar from './components/SideBar.vue'
import musicDetail from './components/MusciDetail.vue'
import songList from './components/SongList.vue'
import store from './store'
import axios from 'axios'


export default {
  name: 'app',
  components: {
    'v-footer': footer,
    'v-header': header,
    'v-sidebar': sidebar,
    'v-detail': musicDetail,
    'v-songlist':songList
  },

  methods: {
      musicEnded(){
      store.dispatch('paly_ended')
    },
    //控制音乐处于播放状态
    musicOnPlaying() {
      store.commit('play')
    },
    //设置音乐总时长
    musicCanPlay() {
      store.dispatch({
        type: 'set_MusicDuration',
        duration: Math.floor(this.$refs.audio.duration)
      })
       store.commit({
        type: 'setMusicLoadStart',
        isloadstart: false
      })
    },
    musicTimeUpdate() {
      store.dispatch({
        type: 'set_CurrentTime',
        time: Math.floor(this.$refs.audio.currentTime)
      })
    },
        // 音乐加载
    loadStart () {
      store.commit({
        type: 'setMusicLoadStart',
        isloadstart: true
      })
    }
  },
  created() {
    let LocalApi = 'static/data.json'
    axios.get(LocalApi).then((res) => {
      // this.info=res.data.user
      store.dispatch('set_MusicAllList', res.data.music)
      console.log(res.data.music);
         // 所有的数据存起来  包括音乐个人信息 等等
      store.dispatch('set_AllInfo', res.data)
      
      this.$refs.audio.setAttribute('src', store.getters.getCurrentMusic.url)
      //获取audio元素方便操作
      store.dispatch('set_AudioEle', this.$refs.audio)
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
  padding: 50px 0;
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
