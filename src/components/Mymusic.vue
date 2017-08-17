<template>
  <div>

  <mylist></mylist>
    <sheet></sheet>
  <!-- 底部显示的菜单列表 -->
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
      return this.$store.getters.getAllMusicList.sheets
    }
  },



  components: {
    mylist,
    sheet:sheet
  }

}
</script>

<style scoped>

</style>