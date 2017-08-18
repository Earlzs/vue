const audio = {
  state: {
    musicList: [],
    musicAllList: [],

    musicDetail: false,
  },
  getters: {
    getMusicList: state => state.musicList,
    getAllMusicList: state => state.musicAllList,
    showMusicDetail: state => state.musicDetail
  },
  mutations: {
    setMusicList(state, obj) {
      state.musicList = obj.list
    },
    setMusicAllList(state, obj) {
      state.musicList = obj.all;
      state.musicAllList = obj
    },

    setMusicDetail(state, obj) {
      state.musicDetail = obj.isShow
    }
  },
  actions: {
    set_MusicList({ commit}, obj) {
      commit('setMusicList', obj)
    },
    set_MusicAllList({ commit}, obj) {
      commit('setMusicAllList', obj)
    },

    show_MusicDetail({commit},){
      commit('setMusicDetail')
    }

  }
}
export default audio
