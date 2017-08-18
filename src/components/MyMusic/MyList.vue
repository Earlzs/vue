<template>
<div class='mylist'>
    <i class="fa" :class="iconClass"></i>
    <div class="mylist-item">
        {{listname}}
        <i v-if="trumpet" class="fa fa-bullhorn" aria-hidden="true"></i>
        <p v-if="showBorder" class="border-1px"></p>
    </div>
</div>
</template>

<script>
export default {
    props: {
        isTrnmpet: {
            type: Boolean,
            default: false
        },
        hasBorder: {
            type: Boolean,
            default: true
        },
        name: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        }
    },
    data: function() {
        return {
            showBorder: true, //是否显示1px的线
            trumpet: false, //是否显示小喇叭
            listname: '',
            iconClass: '',

        }
    },
    created() {
        this.showBorder = this.hasBorder;
        this.trumpet = this.isTrnmpet;
        this.listname = this.name;
        this.iconClass = this.icon;
    },
}
</script>

<style lang='scss' scoped>
@import '../../styles/myMusic.scss';
</style>