<template>
<div class="sidebar">
	<transition name="fade" @touchmove.stop.prevent>
		<div class="menu-mask" v-show="isReallShow" @click="hideMenu"></div>
	</transition>

	<transition name="side">
		<div class='menu-content' v-show="isReallShow">
			<div class="menu-des clearfix">
				<img src="../assets/userlogo.jpg" alt="person-photo">
				<div class='user-des'>
					<span>宾克斯的美酒</span>
					<img class="isvip" src="../assets/vip.png" alt="vip用户">
					<div class='level'>Lv.9</div>

					<transition name="bounce">
						<div class="sign" @click="signClick">
							<i v-show="showIcon" class="fa fa-yelp" style="color:#fff"></i> {{sign}}
						</div>
					</transition>
				</div>
			</div>

			<sidelist iconclass="fa-envelope-o" sidetitle="我的消息" disc=""> </sidelist>
			<sidelist iconclass="fa-skype" sidetitle="我的会员" disc="2018.05.10到期"> </sidelist>
			<sidelist iconclass="fa-shopping-cart" sidetitle="商城" disc=""> </sidelist>
			<split background="#f0f0f0" height="5" border="#eee"></split>
			<sidelist iconclass="fa-vcard-o" sidetitle="我的好友" disc=""> </sidelist>
			<sidelist iconclass="fa-comments-o" sidetitle="附近的人" disc=""> </sidelist>
			<split background="#f0f0f0" height="5" border="#eee"></split>
			<sidelist iconclass="fa-apple" sidetitle="个性换肤" disc="骚粉"> </sidelist>
			<sidelist iconclass="fa-firefox" sidetitle="定时播放" disc=""> </sidelist>
			<sidelist iconclass="fa-qq" sidetitle="音乐闹钟" disc=""> </sidelist>
			<sidelist iconclass="fa-weibo" sidetitle="驾驶模式" disc=""> </sidelist>
			<sidelist iconclass="fa-yelp" sidetitle="音乐云盘" disc=""> </sidelist>



			<div class='side-footer'>
				<div><i class="fa fa-moon-o" aria-hidden="true"></i> 夜间模式
				</div>
				<div>
					<i class="fa fa-cog" aria-hidden="true"></i> 设置
				</div>
				<div>
					<i class="fa fa-sign-out" aria-hidden="true"></i> 退出
				</div>
			</div>
		</div>



	</transition>
</div>
</template>

<script>
import store from '../store'
import sidelist from './SideList.vue'
import split from './Split.vue'
export default {
	props: {
		info: {
			type: Object
		}
	},
	data() {
		return {
			sign: '签到',
			showIcon: true,
		}
	},
	methods: {
		// 显示菜单
		hideMenu() {
			store.dispatch({
				type: 'hideSideBar'
			})
		},
		// 点击签到
		signClick() {
			this.sign = '已签到'
			this.showIcon = false
		}
	},
	computed: {
		// 显示
		isReallShow() {
			return store.state.SideBar.isShow
		}
	},
	components: {
		split: split,
		sidelist: sidelist
	}
}
</script>

<style lang="scss">
@import '../styles/base.scss';
@import '../styles/sidebar.scss';
</style>
