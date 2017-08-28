<template>
<div class="music-sheet">
    <div class="sheet-title clearfix" @click='toggleSheets(event)'>
        <i class="fa fa-angle-down down" aria-hidden="true" ref='toggleicon'></i>
        <div class="sheet-detail">
            <span class="name">{{data_item.name}}</span>
            <span class="count">({{data_item.count}})</span>
        </div>
        <i class="fa fa-cog setting" aria-hidden="true"></i>
    </div>
    <div class="music-content" v-show="showSheets" v-for="(list, listindex) in data_item.detail" @click.stop="showSongSheet(list)">
        <img :src="list.info[0].img_url" alt="">
        <div class="detail">
            <p class="name">{{list.name}}</p>
            <p class="count">{{list.count}}首歌曲</p>
            <p class="border-1px"></p>
            <i class="fa fa-ellipsis-v  fa-2x expand" aria-hidden="true"></i>
        </div>

    </div>


</div>
</template>

<script>
import store from '../../store'
export default {
    props: {
        item: {
            type: Object
        },
        index: {
            type: Number
        }
    },
    data: function() {
        return {
            data_item: {},
            data_index: {},
            showSheets: true
        }
    },
    mounted() {
        this.data_item = this.item
        this.data_index = this.index
    },
    methods: {
        toggleSheets(event) {
            this.$refs.toggleicon.style.transform = this.showSheets ? 'rotate(-90deg) ' : 'rotate(0)';
            this.showSheets = !this.showSheets;
        },
        showSongSheet(data) {
           
            store.dispatch({
                type: 'set_MusicSheetList',
                data: data
            })
            store.commit({
                type: 'setIsShowSongSheet',
                isShow: true
            })
        }
    },
    created(){
        console.log('--------------')
    }
    
}
</script>

<style lang='scss' scoped>
@import '../../styles/myMusic.scss';
</style>