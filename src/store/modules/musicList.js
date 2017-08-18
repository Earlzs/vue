const musicList={
    state:{
        show:false,
    },

     mutations:{
        showMusic(state){
            state.show=true;
        },
        hideMusic(state){
            state.show=false;
        }
    },


    actions:{
        show_MusicList({commit}){
            commit('showMusic')
        },
        hide_MusicList({commit}){
            commit('hideMusic')
        }
    },




    getters:{   
        showMusicList:state=>state.show
    },


}

export default musicList