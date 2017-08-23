const audio = {
  state: {

    audioele: '',
    // 是否正在播放
    playing: false,
    musicList: [],
    musicAllList: [],

    musicDetail: false,
    // 当前播放歌曲的索引
    currentIndex: 0,
    // 当前播放的时间
    currentTime: 0,
    // 音乐的播放时长
    musicAlltime: 0,
    // 音乐是否在加载
    musicLoadStart: false,
    // 播放类型   1是自动播放  2是循环播放  3是随机播放
    playType: 3,
  },
  getters: {
    getMusicList: state => state.musicList,
    getAllMusicList: state => state.musicAllList,
    getIsPlaying: state => state.playing,


    getAudioEle: state => state.audioele,
    // 当前音乐的索引值
    showMusicDetail: state => state.musicDetail,
    getCurrentIndex: state => state.currentIndex,
    // 当前音乐详细信息
    getCurrentMusic: state => state.musicList[state.currentIndex],
    // 获取当前的播放进度
    getCurrentTime: state => state.currentTime,
    getAllTime: state => state.musicAlltime,
    // 音乐开始加载
    getIsLoadStart: state => state.musicLoadStart,
    // 获取播放类型
    getMusicPlayType: state => state.playType,
  },
  mutations: {
    play(state) {
      state.playing = true,
        state.audioele.play()
    },
    playPrev(state) {
      state.currentIndex--;
      const length = state.musicList.length
      if (state.currentIndex < 0) {
        state.currentIndex = length - 1
      }
      state.audioele.setAttribute('src', state.musicList[state.currentIndex].url)
      state.playing = true
      state.audioele.load()
      state.audioele.play()
    },
    playNext(state) {
      state.currentIndex++;
      const length = state.musicList.length
      if (state.currentIndex >= length) {
        state.currentIndex = 0
      }
      state.audioele.setAttribute('src', state.musicList[state.currentIndex].url)
      state.playing = true
      state.audioele.load()
      state.audioele.play()
    },

    playEnded(state) {
      //获取当前的播放方式
      let type = state.playType;


      if (type === 1) {
        state.currentIndex++;
        const length = state.musicList.length
        if (state.currentIndex >= length) {
          state.currentIndex = 0
        }
        state.audioele.setAttribute('src', state.musicList[state.currentIndex].url)
        state.playing = true
        state.audioele.load()
        state.audioele.play()
      }
      if (type === 2) {
        state.audioele.currentTime = 0
        state.playing = true
        state.audioele.play()
      }
      if(type===3){
        const length = state.musicList.length
				state.currentIndex = Math.floor(Math.random() * length)
				state.audioele.setAttribute('src', state.musicList[state.currentIndex].url)
				state.playing = true
				state.audioele.load()
				state.audioele.play()
      }

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
    setCurrentTime(state, obj) {
      state.currentTime = obj.time
    },
    setMusicDetail(state, obj) {
      state.musicDetail = obj.isShow
    },
    //音乐的总时长
    MusicDuration(state, obj) {
      state.musicAlltime = obj.duration
    },
    // 设置音乐是否正在加载
    setMusicLoadStart(state, obj) {
      state.musicLoadStart = obj.isloadstart
    },

    setPlayType(state) {
      if (state.playType === 3) {
        state.playType = 1
      } else {
        state.playType++
      }
    },
  },
  actions: {
    //设置音频元素
    set_AudioEle({
      commit
    }, obj) {
      commit('set_AudioEle', obj)
    },
    set_MusicList({
      commit
    }, obj) {
      commit('setMusicList', obj)
    },
    set_MusicAllList({
      commit
    }, obj) {
      commit('setMusicAllList', obj)
    },

    show_MusicDetail({
      commit
    }, ) {
      commit('setMusicDetail')
    },
    play_prev({
      commit
    }) {
      commit('playPrev')
    },
    play_next({
      commit
    }) {
      commit('playNext')
    },
    paly_ended({
      commit
    }) {
      commit('playEnded')
    },

    set_palyType({
      commit
    }) {
      commit('setPlayType')
    },
    set_CurrentTime({
      commit
    }, obj) {
      commit('setCurrentTime', obj)
    },
    set_MusicDuration({
      commit
    }, obj) {
      commit('MusicDuration', obj)
    },


  }
}
export default audio
