
const audio={
    state:{
        musicList:[],
        musicAllList:[],
    },
    getters:{
        getMusicList:(state)=>state.musicList,
        getAllMusicList:(state)=>state.musicAllList,
    },
    mutations:{
        setMusicList(state,obj){
            state.musicList=obj.list
        },
        setMusicAllList(state,obj){
            state.musicList=obj;
            state.musicAllList=obj.all
        }
    },
    actions:{
        set_MusicList({commit},obj){
            commit('setMusicList',obj)
        },
        set_MusicAllList({commit},obj){
            commit('setMusicAllList',obj)
        }

    }
}
export default audio