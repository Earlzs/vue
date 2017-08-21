<template>
<div class='range'>
    <span class='rangeNowtime'>{{timeFormat(musicCurrentTime)}}</span>
    <div class='duration'>
        <span class='currentProgress'  :style="progressWidth" ref="currentProgress" ></span>
        <span class='ball'></span>
    </div>
    <div class='rangeAlltime'>{{timeFormat(musicAllTime)}}</div>
</div>
</template>

<script>
// import store from '../../store/';
export default {
    data: function() {
        return {
            currenttime: 0,
        }
    },
    computed: {
        musicCurrentTime() {
             console.log(this.$store.getters.getCurrentTime+'---current')
            return this.$store.getters.getCurrentTime ? this.$store.getters.getCurrentTime : '00:00'
        },
        //获取总时长
        musicAllTime() {
            console.log(this.$store.getters.getAllTime +'---alltime')
            return this.$store.getters.getAllTime ? this.$store.getters.getAllTime : '00:00'
        },
        progressWidth(){
                return	{'width': `calc(${(this.$store.getters.getCurrentTime / this.$store.getters.getAllTime * 100).toFixed(2)}%`}
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
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../../styles/musicdetail.scss'
</style>