import Vue from 'vue'
import Vuex from 'vuex'
import SideBar from './modules/SideBar.js'



Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    SideBar: SideBar,
    // audioInfo: AudioInfo,
    // menuList: MenuList,
    // musiclist: MusicList,
    // reconmmed: Reconmmed
  }
})



export default store