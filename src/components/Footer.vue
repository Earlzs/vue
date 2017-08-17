<template>
<div class='footer'>
    <router-link v-for="(item,index) of menuList" class='footer-item' :key="item.index" :to="item.to" active-class>
        <i v-bind:class="item.icon" aria-hidden="true"></i>
        <br/> {{item.des}}
    </router-link>
</div>
</template>

<script>
export default {
    name: 'footer',
    data: function() {
        return {
            menuList: [{
                    to: '/discover',
                    icon: 'fa fa-sun-o',
                    des: '发现音乐'
                },
                {
                    to: '/mymusic',
                    icon: 'fa fa-music',
                    des: '我的音乐'
                },
                {
                    to: '/friend',
                    icon: 'fa fa-eye',
                    des: '朋友'
                },
                {
                    to: '/me',
                    icon: 'fa fa-user-o',
                    des: '朋友'
                },

            ]
        }
    },
    methods: {}
}
</script>

<style lang='scss' scoped>
@import '../styles/footer.scss'
</style>