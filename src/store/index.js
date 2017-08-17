import Vue from 'vue'
import Vuex from 'vuex'
import SideBar from './modules/SideBar.js'
import Audio from './modules/audio.js'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    SideBar: SideBar,
    audio:Audio,
    // audioInfo: AudioInfo,
    // menuList: MenuList,
    // musiclist: MusicList,
    // reconmmed: Reconmmed
  }
})



export default store