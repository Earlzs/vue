<template>
<swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item" style='background-image: url("http://p1.music.126.net/d6LJlI-KWzaKG7PvfwFeNw==/18701593278870289.jpg");background-size:cover'></swiper-slide>
    <swiper-slide class="swiper-item" style='background-image: url("http://p1.music.126.net/7AGS-0gGxvJt3tLV-EDt3Q==/18911599998058601.jpg");background-size:cover' >Slide 2</swiper-slide>
    <swiper-slide class="swiper-item" style='background-image: url("http://p1.music.126.net/G-EozD2n0Ga5HMo5uoz06Q==/19230458370112292.jpg");background-size:cover'>Slide 3</swiper-slide>
    <swiper-slide class="swiper-item" style='background-image: url("http://p1.music.126.net/CcEUT-E_M6jMcufZ7YFk6A==/18701593278870290.jpg");background-size:cover'>Slide 4</swiper-slide>
    <swiper-slide class="swiper-item" style='background-image: url("http://p1.music.126.net/o1rdrf99-VrIXHWpeszwqQ==/18972073137572340.jpg");background-size:cover'>Slide 5</swiper-slide>
    <swiper-slide class="swiper-item" style='background-image: url("http://p1.music.126.net/rev1WNZT2D4xE40pGNo43g==/19085322835241663.jpg");background-size:cover'>Slide 6</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
export default {
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 30,
                mousewheelControl: true,
                
            }
        }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {
        // you can use current swiper instance object to do something(swiper methods)
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(3, 1000, false)
    }
}
</script>

<style lang='scss' scoped>
.swiper-box {
    width: 100%;
    height: 189px;
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

.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{

}
.swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0,0,0,0.2);
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    color:#fff;
    background: #007aff;
  }
</style>