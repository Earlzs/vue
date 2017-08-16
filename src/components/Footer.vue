<template>
<div class='footer'>
    
    <router-link to='/discover' class='active footer-item'>
            <i class="fa fa-sun-o" aria-hidden="true"></i>
            <br/> 发现音乐
    </router-link>
    <router-link to='/mymusic' class='footer-item'>
            <i class="fa fa-music" aria-hidden="true"></i>
            <br/> 我的音乐
    </router-link>
    <router-link to='friend' class='footer-item'>
            <i class="fa fa-eye" aria-hidden="true"></i>
            <br/> 朋友
    </router-link>
    <router-link to='me' class='footer-item'>
            <i class="fa fa-user-o" aria-hidden="true"></i>
            <br/> 账号
    </router-link>
</div>
</template>

<script>
export default {
    name: 'footer',
    data: function() {
        return {}
    },
    methods: {}
}
</script>

<style lang='scss' scoped>
@import '../styles/footer.scss'
</style>