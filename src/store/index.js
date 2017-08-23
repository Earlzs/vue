import Vue from 'vue'
import Vuex from 'vuex'
import SideBar from './modules/SideBar.js'
import Audio from './modules/audio.js'
import MusicList from './modules/musicList.js'
import Songlist from './modules/songList.js'
Vue.use(Vuex)

const store = new Vuex.Store({


  state: {
    allInfo: []
  },
  getters: {
    getAllInfo: state => state.allInfo,
    // 获取推荐歌单信息
    getFindMusic: state => state.musicAllList.findmusic
  },
  mutations: {
    setAllInfo (state, obj) {
      state.allInfo = obj
    }
  },
  actions: {
    set_AllInfo ({ commit }, obj) {
      commit('setAllInfo', obj)
    }
  },
  modules: {
    SideBar: SideBar,
    audio:Audio,
    MusicList:MusicList,
    Songlist:Songlist
    // audioInfo: AudioInfo,
    // menuList: MenuList,
    // musiclist: MusicList,
    // reconmmed: Reconmmed
  }
})



export default store