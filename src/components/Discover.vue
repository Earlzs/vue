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
export default {
    name: 'discover',
    data: function() {
        return {}
    },
    methods: {}
}
</script>

<style lang='scss' scoped>
@import '../styles/discover.scss'
</style>