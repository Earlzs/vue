
// 测面滑动菜单效果
const SHOW_MUSIC_LIST = true
const HIDE_MUSIC_LIST = false

const songList={
    state:{
        isShow:false,
        showSongSheet: false,
    },
    mutations: {
        showMusic (state) {
			// state.content = obj === undefined ? state.content : obj.amount
			state.isShow = SHOW_MUSIC_LIST
		},
		hideMusic (state) {
			state.isShow = HIDE_MUSIC_LIST
        },
        	// 设置是否显示歌单信息
		setIsShowSongSheet (state, obj) {
			state.isShow = obj.isShow
		},
    },

    getters:{

        // 获取歌单列表的显示状态
		getIsShowSongSheet: state => state.isShow,
    }
}
export default songList;