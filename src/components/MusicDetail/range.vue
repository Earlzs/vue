<template>
<div class='range'>
    <span class='rangeNowtime'>{{timeFormat(musicCurrentTime)}}</span>
    <div class='duration' ref="duration" @click.stop="setCurrentProgress($event)">
        <span class='currentProgress' :style="progressWidth" ref="currentProgress"></span>
        <span class='ball'  ref="ball"   @mousedown.stop()="mouseDown" @touchstart.stop()="mouseDown" @touchmove.stop()="touchMove($event)" @touchend.stop()="touchEnd($event)"></span>
    </div>
    <div class='rangeAlltime'>{{timeFormat(musicAllTime)}}</div>
</div>
</template>

<script>
// import store from '../../store/';

let canDrag = false
let persentWidth = 0
export default {

    data: function() {
        return {
			currenttime: 0,
        }
    },
    computed: {
        musicCurrentTime() {
            console.log(this.$store.getters.getCurrentTime + '---current')
            return this.$store.getters.getCurrentTime ? this.$store.getters.getCurrentTime : '00:00'
        },
        //获取总时长
        musicAllTime() {
            console.log(this.$store.getters.getAllTime + '---alltime')
            return this.$store.getters.getAllTime ? this.$store.getters.getAllTime : '00:00'
        },
        progressWidth() {
            if (!this.$store.getters.getIsLoadStart) {
                return {
                    'width': `calc( ${(this.$store.getters.getCurrentTime / this.$store.getters.getAllTime * 100).toFixed(2) }%`
                }
            } else {
                return {
                    'width': '0'
                }
            }

        },
    },
    methods: {
        timeFormat(time) {
            if (isNaN(time)) {
                return '00:00'
            }
            let min = time / 60 > 9 ? Math.floor(time / 60) : `0${Math.floor(time/60)}`;
            let miao = time % 60 > 9 ? Math.floor(time % 60) : `0${Math.floor(time%60)}`;

            return `${min}:${miao}`
        },

        //进度条点击
        setCurrentProgress(event) {
            let e=event ||window.event;
            let mouseX=e.pageX;   //鼠标点击的位置
            let durationW=this.$refs.duration.offsetLeft;//进度条的OffsetLeft的位置
            persentWidth= Math.floor(mouseX-durationW)/this.$refs.duration.offsetWidth*100;   //鼠标点击位置占歌曲总长的百分比
            persentWidth=persentWidth>100? 100:persentWidth
            persentWidth=persentWidth<0? 0:persentWidth
            //设置store里audio.currentTime的百分比
            this.$store.getters.getAudioEle.currentTime = Math.floor(this.$store.getters.getAudioEle.duration * persentWidth) / 100
            //设置progress的宽比
            this.$refs.currentProgress.style.width = `calc(${persentWidth}%`
        },

        mouseDown() {
            canDrag = true
        },
        mouseMove(event) {
            if (canDrag) {
                let e = event || window.event
                let mouseX = e.pageX
                let offsetLeft = this.$refs.duration.offsetLeft
                persentWidth = Math.floor((mouseX - offsetLeft) / this.$refs.duration.offsetWidth * 100)
                persentWidth = persentWidth > 100 ? 100 : persentWidth
                persentWidth = persentWidth < 0 ? 0 : persentWidth
                // this.$store.getters.getAudioElement.currentTime = this.duration * persentWidth / 100
                this.$refs.currentProgress.style.width = `calc(${persentWidth}%`
            }
        },
        mouseUp() {
            if (canDrag !== false) {
                canDrag = false
                if (isNaN(this.$store.getters.getAudioEle.duration)) return
                this.$store.getters.getAudioEle.currentTime = this.$store.getters.getAudioEle.duration * persentWidth / 100
            }
        },
        touchMove(event) {
            if (canDrag) {
                let mouseX = event.touches[0].pageX
                let offsetLeft = this.$refs.duration.offsetLeft
                persentWidth = Math.floor((mouseX - offsetLeft) / this.$refs.duration.offsetWidth * 100)
                persentWidth = persentWidth > 100 ? 100 : persentWidth
                persentWidth = persentWidth < 0 ? 0 : persentWidth
                // this.$store.getters.getAudioElement.currentTime = this.duration * persentWidth / 100
                this.$refs.currentProgress.style.width = `calc(${persentWidth}%`
            }
        },
        touchEnd(event) {
            if (canDrag !== false) {
                canDrag = false
                if (isNaN(this.$store.getters.getAudioEle.duration)) return
                this.$store.getters.getAudioEle.currentTime = this.$store.getters.getAudioEle.duration * persentWidth / 100
            }
        },
    },


    
}
</script>

<style lang='scss' scoped>
@import '../../styles/musicdetail.scss'
</style>