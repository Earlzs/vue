<template>
<transition name='silderUp'>
    <div class='music-detail' v-show='showMusicDetail'>
        <div class='fifterbg'></div>
        <div class='detail-content'>
            <div class='content-header'>
                <i class="fa fa-undo back" aria-hidden="true" @click='hideMusicList'></i>
                <div class='singer-detail'>
                    <span>小酒窝</span>
                    <span>林俊杰，蔡妮马</span>
                </div>
                <i class="fa fa-share-alt manage" aria-hidden="true"></i>
            </div>


            <div class='content-wrapper'>
                <div class='cdcard'>
                    <div class='line'></div>
                    <div class='triger'></div>
                </div>

                <div class='cdrotate'>
                    <div class='rotatebg'></div>
                    <img src="http://oiq8j9er1.bkt.clouddn.com/music_%E4%B8%8D%E5%A6%82%E5%90%83%E8%8C%B6%E5%8E%BB.jpg" alt="">
                </div>


                <div class='musicDo'>
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                    <i class="fa fa-download" aria-hidden="true"></i>
                    <i class="fa fa-comments-o" aria-hidden="true"></i>
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
            </div>


            <div class='content-footer'>
                <div class='rangge'></div>
                <div class='detailCtrl'>
                    <i class="fa fa-random random" aria-hidden="true"></i>
                    <i class="fa fa-step-backward backward" aria-hidden="true"></i>
                    <i class="fa fa-play-circle-o playMusic" aria-hidden="true"></i>
                    <i class="fa fa-step-forward forward" aria-hidden="true"></i>
                    <i class="fa fa-list misicList" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
// <i class="fa fa-pause" aria-hidden="true"></i>

import store from '../store/'


export default {
    data: function() {
        return {}
    },
    methods: {
         hideMusicList() {
           store.dispatch('hide_MusicList')
        }
    },
    computed: {
        showMusicDetail() {
            return this.$store.getters.showMusicList
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../styles/musicdetail.scss'
</style>