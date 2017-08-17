<template>
<div>
    <div class='mylist'>
        <i class="fa fa-music"></i>
        <div class="mylist-item">
            我的音乐
            <i></i>
        </div>
    </div>
    <div class='mylist'>
        <i class="fa fa-music"></i>
        <div class="mylist-item">
            我的音乐
            <i></i>
        </div>
    </div>
    <div class='mylist'>
        <i class="fa fa-music"></i>
        <div class="mylist-item">
            我的音乐
            <i></i>
        </div>
    </div>
    <div class='mylist'>
        <i class="fa fa-music"></i>
        <div class="mylist-item">
            我的音乐
            <i></i>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {}
    },
    methods: {}
}
</script>

<style lang='scss' scoped>
$icon-red:#c62f2f;
.mylist {
    line-height: 50px;
    background: rgb(247, 247, 247);
    width: 100%;
    display: flex;
    >i {
        flex: 2;
        color: $icon-red;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mylist-item {
        flex: 9;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }
}
</style>