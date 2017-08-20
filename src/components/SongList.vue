<template>
<transition name='songList'>
    <div class='songList' v-show="showSonglist">
        <div class='song-header'>
            <div>
                <i class="fa fa-arrow-left" aria-hidden="true"></i><span> Music list</span>
            </div>
            <i class="fa fa-search" aria-hidden="true"></i>
        </div>


        <div class='musicDetail'>
            <div class='musicDetail-top clearfix'>
                <img src="http://oiq8j9er1.bkt.clouddn.com/music_owl_city.jpg" alt="">
                <div class='musicDetail-r'>
                    <div class='detailname'>在欧洲田园般的乡村上骑单车</div>
                    <div>
                        <img src="" alt="">
                        <span>user.name </span> >
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
                                <span class='info-name'>2121</span>
                                <span class='info-author'>212121</span>
                        </div>
                         <i class="fa fa-music" aria-hidden="true"></i> 
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
        return {}
    },
    computed: {
        showSonglist() {
            return this.$store.getters.isShowSongList
        }
    },
    methods: {}
}
</script>

<style lang='scss' scoped>
@import '../styles/songList.scss';
</style>