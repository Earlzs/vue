<template>
<div class="header">
    <div>
        <i class="fa fa-bars" @click="showMueu" aria-hidden="true"></i>
    </div>
    <div class='search'>
        <input type="text" placeholder='搜索音乐、歌词、电台'>
        <i class="fa fa-search" aria-hidden="true"></i>
    </div>

    <div>
        <i class="fa" aria-hidden="true" @click='showMusicList' :class='palyMusic'></i>
    </div>

</div>
</template>

<script>
import store from '../store'

export default {
    name: 'header',
    data: function() {
        return {
            // shoMenu: this.showMenu
        }
    },
    computed: {
        palyMusic() {
          return this.$store.getters.getIsPlaying ? 'fa-spinner' : 'fa-signal'
        }
    },
    methods: {
        showMueu() {
            store.dispatch({
                type: 'showSideBar'
            })
        },
        // hideMuen() {
        //     store.dispatch({
        //         type: 'hideSideBar'
        //     })
        // }

        showMusicList() {
            store.dispatch('show_MusicList')
        }

    }
}
</script>


<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/header.scss";
</style>
