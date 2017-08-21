const audio = {
  state: {

    audioele: '',
    // 是否正在播放
    playing: false,
    musicList: [],
    musicAllList: [],

    musicDetail: false,
    currentIndex: 0,
  },
  getters: {
    getMusicList: state => state.musicList,
    getAllMusicList: state => state.musicAllList,
    getIsPlaying: state => state.playing,
    // 当前音乐的索引值
    showMusicDetail: state => state.musicDetail,
    getCurrentIndex: state => state.currentIndex,
    // 当前音乐详细信息
    getCurrentMusic: state => state.musicList[state.currentIndex],
    // 获取当前的播放进度
    getCurrentTime: state => state.currentTime,
  },
  mutations: {
    play(state) {
      state.playing = true,
        state.audioele.play()
    },
    playPrev(state){
      state.currentIndex --;
      const length=state.musicList.length
      if(state.currentIndex<0){
        state.currentIndex=length-1
      }
      state.audioelement.setAttribute('src', state.musicList[state.currentIndex].url)
			state.playing = true
			state.audioelement.load()
			state.audioelement.play()
    },
    playNext(state){
      state.currentIndex ++;
      const length=state.musicList.length
      if(state.currentIndex>=length){
         state.currentIndex=0
      }
      state.audioele.setAttribute('src', state.musicList[state.currentIndex].url)
      state.playing = true
			state.audioele.load()
			state.audioele.play()
    },
    togglePlay(state) {
      if (state.playing) {
        state.playing = false
        state.audioele.pause()
      } else {
        state.playing = true
        state.audioele.play()
      }
    },
    set_AudioEle(state, ele) {
      state.audioele = ele
    },
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
    //设置音频元素
    set_AudioEle({commit}, obj) {
      commit('set_AudioEle', obj)
    },
    set_MusicList({commit}, obj) {
      commit('setMusicList', obj)
    },
    set_MusicAllList({commit}, obj)
     {commit('setMusicAllList', obj)
    },

    show_MusicDetail({commit}, ) {
      commit('setMusicDetail')
    },
    play_prev({commit}){
      commit('playPrev')
    },
    play_next({commit}){
      commit('playNext')
    },

  }
}
export default audio
