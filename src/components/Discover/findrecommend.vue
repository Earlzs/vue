<template>
<div>
    <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item" style='background-image: url("http://p1.music.126.net/d6LJlI-KWzaKG7PvfwFeNw==/18701593278870289.jpg");background-size:cover'></swiper-slide>
        <swiper-slide class="swiper-item" style='background-image: url("http://p1.music.126.net/7AGS-0gGxvJt3tLV-EDt3Q==/18911599998058601.jpg");background-size:cover'></swiper-slide>
        <swiper-slide class="swiper-item" style='background-image: url("http://p1.music.126.net/G-EozD2n0Ga5HMo5uoz06Q==/19230458370112292.jpg");background-size:cover'></swiper-slide>
        <swiper-slide class="swiper-item" style='background-image: url("http://p1.music.126.net/CcEUT-E_M6jMcufZ7YFk6A==/18701593278870290.jpg");background-size:cover'></swiper-slide>
        <swiper-slide class="swiper-item" style='background-image: url("http://p1.music.126.net/o1rdrf99-VrIXHWpeszwqQ==/18972073137572340.jpg");background-size:cover'></swiper-slide>
        <swiper-slide class="swiper-item" style='background-image: url("http://p1.music.126.net/rev1WNZT2D4xE40pGNo43g==/19085322835241663.jpg");background-size:cover'></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="recommend-type">
        <div class="div-type">
            <i class="fa fa-microchip" aria-hidden="true"></i>
            <p class="title">私人FM</p>
        </div>
        <div class="div-type">
            <i class="fa fa-car" aria-hidden="true"></i>
            <p class="title">每日听歌推荐</p>
        </div>
        <div class="div-type">
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
            <p class="title">云音乐热歌榜</p>
        </div>
    </div>

    <div class="findsheettitle">
        <span class="name">推荐歌单</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
    <div class="recommend-list">
        <findsheetlist v-if="reconmmend" v-for="(sheet, sheetindex) in reconmmend" :key="sheet.id" :imagesrc="sheet.info[0].img_url" :showtoprighttips="sheet.showtoptips" :listpadding="sheet.padding" :toprighticonclass="sheet.toptipsclass"
            :toprighttitle="sheet.listencount" :showbottomtips="sheet.showbottomtips" :bottomtips="sheet.bottomtips" :showbottomtitle="sheet.showbottomtitle" :bottomtitle="sheet.bottomtitle" :listwidth="sheet.listwidth"></findsheetlist @click.stop="showSongSheet(list)">
    </div>
</div>
</template>

<script>
import store from '../../store'
import findsheetlist from './findesheetlist.vue'
import Vue from 'vue'
import {
    swiper,
    swiperSlide
} from 'vue-awesome-swiper'
export default {
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                slidesPerView: 1,
                paginationClickable: true,
                // spaceBetween: 30,
                mousewheelControl: true,
                autoplay: 2500,

            }
        }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
        reconmmend() {
            return store.getters.getAllInfo.findmusic.reconmmend.recommendMinSheets
        },
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {
        // you can use current swiper instance object to do something(swiper methods)
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(3, 1000, false)
    },
    components: {
        swiper,
        swiperSlide,
        findsheetlist
    }
}
</script>

<style lang='scss' scoped>
@import '../../styles/discover.scss';
.swiper-box {
    width: 100%;
    height: 30vh;
    margin: 0 auto;
}

.swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {}

.swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
}
</style>