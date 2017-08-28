<template>
<transition name='songList'>
    <div class='songList' v-show="showSonglist">
        <div class='song-header'>
            <div>
                <i class="fa fa-arrow-left" aria-hidden="true" @click='hideSongList'></i><span> Music list</span>
            </div>
            <i class="fa fa-search" aria-hidden="true"></i>
        </div>

        <div class='musicDetail'>
            <div class='musicDetail-top' ref='bgcImg'>
                <img v-if="getSongSheet.info" :src="getSongSheet.info[0].img_url" alt="">
                <div class='musicDetail-r'>
                    <div class='detailname' v-if="getSongSheet">{{getSongSheet.name}}</div>
                    <div>

                        <img v-if="getSongSheet.user" style='width:20px;height:20px;border-radius:50%;color:#f0f0f0' :src="getSongSheet.user.avatar" alt="">
                        <span v-if="getSongSheet.user">{{getSongSheet.user.name}}</span> >
                    </div>
                </div>

                <div class='operation'>
                    <div>
                        <i class="fa fa-life-ring" aria-hidden="true"></i>
                        <br> 收藏
                    </div>
                    <div>
                        <i class="fa fa-american-sign-language-interpreting" aria-hidden="true"></i> <br> 评论
                    </div>
                    <div>
                        <i class="fa fa-coffee" aria-hidden="true"></i> <br> 分享
                    </div>
                    <div>
                        <i class="fa fa-sign-language" aria-hidden="true"></i> <br> 下载
                    </div>
                </div>
            </div>


            <div class='musicDetail-bottom'>
                <div class='bootom-warpper'>
                    <div>
                        <i class="fa fa-music" aria-hidden="true"></i> 播放全部(共19首)
                    </div>
                    <div>
                        <i class="fa fa-music" aria-hidden="true"></i> 多选
                    </div>
                </div>

                <div class='song-list'>

                    <div class='warpper'>
                        <div class='song-index'>
                            1
                        </div>
                        <div class='song-info'>
                            <span class='info-name'>Far Away</span>
                            <span class='info-author'>Yinyues</span>
                        </div>
                        <i class="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

        </div>
    </div>
</transition>
</template>

<script>
import store from '../store/'

export default {
    data: function() {
        return {
            MusicSheet: [],
            isShow: false
        }
    },
    computed: {

        showSonglist() {
            this.isShow = this.$store.getters.getIsShowSongSheet
            return this.isShow
        },

        // getSongSheet() {
        //     console.log(11111)
        //     console.log(this.$store.getters.getMusicSheetList);
        //     return this.$store.getters.getMusicSheetList ? this.$store.getters.getMusicSheetList : ''
        // }
        getSongSheet() {
            console.log(this.$store.getters.getMusicSheetList)
            this.sheetData = this.$store.getters.getMusicSheetList
            return this.$store.getters.getMusicSheetList ? this.$store.getters.getMusicSheetList : ''
        },

    },

    methods: {

        hideSongList() {
            store.commit({
                type: 'setIsShowSongSheet',
                isShow: false
            })
        }
    },
    watch: {
        isShow: function(newisshwo, oldisshow) {
            // this.$refs.songsheet.scrollTop = 0
            let img = this.$store.getters.getMusicSheetList ? this.$store.getters.getMusicSheetList : ''
            if (newisshwo) {
                this.$refs.bgcImg.style.backgroundImage = `url(${img.info[0].img_url})`
                this.$refs.bgcImg.style.backgroundSize = `5800%`
                this.$refs.bgcImg.style.backgroundPosition = `center center`
                // this.$refs.songheader.style.backgroundImage = `url(${img.info[0].img_url})`
                // this.$refs.songheader.style.backgroundSize = `5800%`
                // this.$refs.songheader.style.backgroundPosition = `center center`
            }
        }
    }

}
</script>

<style lang='scss' scoped>
@import '../styles/songList.scss';
</style>