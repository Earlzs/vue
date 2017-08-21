<template>
<transition name='silderUp'>
    <div class='music-detail' v-show='showMusicDetail'>
        <div class='fifterbg' :style="{background : 'url(' + this.getCurrentMusic.img_url + ')', backgroundSize : '2200%' , backgroundPosition : 'center center'}"></div>
        <div class='detail-content'>
            <div class='content-header'>
                <i class="fa fa-undo back" aria-hidden="true" @click='hideMusicList'></i>
                <div class='singer-detail'>
                    <span>{{getCurrentMusic.name}}</span>
                    <span>{{getCurrentMusic.singer}}</span>
                </div>
                <i class="fa fa-share-alt manage" aria-hidden="true"></i>
            </div>


            <div class='content-wrapper'>
                    <div class='line'></div>
                    <div class='triger' :class="isPlaying?'':'pause'"></div>

                <div ref="cdcontent">
                    <div class='cdrotate' ref="cd" :class="isPlaying ? 'animate ' : ''">
                        <div class='rotatebg'></div>
                        <img :src="getCurrentMusic.img_url" alt="" >
                    </div>
                </div>



                <div class='musicDo'>
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                    <i class="fa fa-download" aria-hidden="true"></i>
                    <i class="fa fa-comments-o" aria-hidden="true"></i>
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
            </div>

            <div class='content-footer'>
                <div class='rangge'>
                    <range></range>
                </div>
                <div class='detailCtrl'>
                    <i class="fa fa-random random" aria-hidden="true"></i>
                    <i class="fa fa-step-backward backward" aria-hidden="true" @click.stop='playPrev'></i>
                    <i class="fa playMusic" :class='isPlaying? "fa-play-circle-o": "fa-pause"' @click.stop='playPause' aria-hidden="true"></i>
                    <i class="fa fa-step-forward forward" aria-hidden="true" @click.stop='playNext'></i>
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
import range from '../components/MusicDetail/range.vue'

export default {
    data: function() {
        return {
            isPlay: false
        }
    },

    methods: {
        //隐藏详情列表
        hideMusicList() {
            store.dispatch('hide_MusicList')
        },
        // 控制音乐播放暂停
        playPause() {
            store.commit('togglePlay')
        },
        playNext(){
            store.dispatch('play_next')
        },
        playPrev(){
             store.dispatch('play_prev')
        }
    },
    computed: {

        isPlaying() {
            this.isPlay = this.$store.getters.getIsPlaying;
            return this.$store.getters.getIsPlaying ? this.$store.getters.getIsPlaying : ''
        },

        //显示当前播放项详情
        showMusicDetail() {
            return this.$store.getters.showMusicList
        },
        //获取当前音乐
        getCurrentMusic() {

            console.log(this.$store.getters.getCurrentMusic);
            return this.$store.getters.getCurrentMusic ? this.$store.getters.getCurrentMusic : ''
        }

    },
    watch: {
        //播放停止运用animate需要存储下当前旋转到哪个位置了，
        isPlay: function(newisPlay, oldisPlay) {
            //如果当前不是播放状态
            if (newisPlay !== true) {
                //获取到当前cd旋转至的rotate
                let imageTrans = getComputedStyle(this.$refs.cd).transform
                //然后在获取外层包裹元素的transform属性
                let contentTrans = getComputedStyle(this.$refs.cdcontent).transform
                //如果外层元素transform属性===none的话，设置外层旋转角度为当前旋转到的rotate,如果不为none 从新拼接
                this.$refs.cdcontent.style.transform = contentTrans === 'none' ? imageTrans : imageTrans.concat('', contentTrans)
            }
        },
    },
    		components: {
			'range': range
		},
}
</script>

<style lang='scss' scoped>
@import '../styles/musicdetail.scss'
</style>