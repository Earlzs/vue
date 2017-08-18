<template>
<div >

  <mylist name="我的音乐" icon="fa-music" :isTrnmpet="true"></mylist>
  <mylist name="最近播放"  icon="fa-clock-o"></mylist>
  <mylist name="我的电台"  icon="fa-headphones"></mylist>
  <mylist name="我的收藏"  icon="fa-cart-plus":hasBorder="false"></mylist>
  <sheet v-for="(item, index) in items" :item="item" :index="index" :key="item.id"></sheet>
</div>
</template>

<script>
import mylist from './MyMusic/MyList.vue'
import sheet from './MyMusic/Musicsheet.vue'
import store from '../store'
import axios from 'axios'

export default {
  computed: {
    items() {
      console.log(this.$store.getters.getAllMusicList.sheets);
      return this.$store.getters.getAllMusicList.sheets
    }
  },



  components: {
    mylist,
    sheet: sheet
  }

}
</script>

<style lang="scss" scoped>

</style>