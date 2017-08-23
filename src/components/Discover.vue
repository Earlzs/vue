<template>
<div>
    <div class='discover'>
       

        <ul class="find-menu">
            <router-link class="menu-list" tag="li" to="/discover/findrecommend">
                <div class="menu-list-div active">个性推荐</div>
            </router-link>
            <router-link class="menu-list" tag="li" to="/discover/findsheet">
                <div class="menu-list-div">歌单</div>
            </router-link>
            <router-link class="menu-list" tag="li" to="/ccc">
                <div class="menu-list-div">主播电台</div>
            </router-link>
            <router-link class="menu-list" tag="li" to="/ddd">
                <div class="menu-list-div">排行榜</div>
            </router-link>
        </ul>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
export default {
    data() {
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  
}
</script>

<style lang='scss' scoped>
@import '../styles/discover.scss';
</style>