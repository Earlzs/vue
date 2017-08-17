<template>
<div class="header">
    <div>
        <i class="fa fa-bars" @click="showMueu" aria-hidden="true"></i>
    </div>
    <div>
        <i class="fa fa-music" aria-hidden="true"></i>
        <i class="fa fa-free-code-camp" aria-hidden="true"></i>
        <i class="fa fa-address-card-o" aria-hidden="true"></i>
    </div>
    <div>
        <i class="fa fa-search" aria-hidden="true"></i>
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
    methods: {
        showMueu() {
            store.dispatch({
                type: 'showSideBar'
            })
        },
        hideMuen(){
            store.dispatch({
                type: 'hideSideBar'
            })
        }
    }
}
</script>


<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/home.scss";
</style>
