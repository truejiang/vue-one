<template>
  <div class="music-wrapper">
    <div class="list-item-wrapper" ref="scrollWrapper">
      <cube-scroll
      ref="scroll"
      :data="itemList">
        <div class="item-list" v-for="item in itemList" :key="item.id">
          <p class="category-title">- 音乐 -</p>
          <h2 class="text-title">{{item.title}}</h2>
          <p class="author">{{item.share_list.wx.desc.split(' ')[0]}}</p>
          <div class="music-cover"></div>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import { getMusicList } from '@/api/getData'
export default {
  data () {
    return {
      itemList: []
    }
  },
  created () {
    this._getMusicList()
  },
  mounted () {
    this.$refs.scrollWrapper.style.height = document.body.clientHeight + 'px'
  },
  methods: {
    _getMusicList () {
      getMusicList().then((res) => {
        this.itemList = this.itemList.concat(res.data.data)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.music-wrapper
  width 100%
</style>
