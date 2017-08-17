<template>
<div class="sidelist">
	<i class='fa' :class="side_iconclass"></i>
	<span class="title">{{side_title}}</span>
	<span class="disc" v-show="showDesc">{{side_disc}}</span>
</div>
</template>

<script>
export default {
	props: {
		iconclass: {
			default: ''
		},
		sidetitle: {
			default: ''
		},
		disc: {
			default: ''
		}
	},
	data() {
		return {
			side_iconclass: this.iconclass,
			side_title: this.sidetitle,
			side_disc: this.disc
		}
	},
	computed: {
		showDesc() {
			return this.side_disc.length
		}
	},
	mounted() {}
}
</script>

<style lang="scss">
.sidelist {
	width: 100%;
	line-height: 40px;
	padding: 0 15px;
	background: #fff;
	color: #333;
	text-align: left;
	cursor:pointer;
	i {
		color: #9a9a9a;
		margin: 5px;
		font-size: 16px;
	}
	.disc {
		float: right;
		color: #9c9c9c;
		font-size: 10px;
	}
}
</style>
