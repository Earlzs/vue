<template>
<div class="music-sheet">
    <div class="sheet-title">
        <i class="fa fa-angle-down" aria-hidden="true"></i>
        <div class="sheet-detail">
            <span class="name">{{data_item.name}}</span>
            <span class="count">({{data_item.count}})</span>
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
        return {}
    },
    computed: {
        getSheets() {
            return this.$store.getters.getMusicAllList.sheets
        }
    },
    mounted() {
        this.data_item = this.item
        this.data_index = this.index
    },
    methods: {

    }
}
</script>

<style lang='scss' scoped>
@import '../../styles/myMusic.scss';
</style>