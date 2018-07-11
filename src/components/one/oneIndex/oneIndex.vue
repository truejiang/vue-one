<template>
  <div class="one-wrapper">
    <div class="list-item-wrapper" ref="scrollWrapper">
      <cube-scroll
      ref="scroll"
      :data="itemList"
      :options="scrollOptions"
      @pulling-up="onPullingUp">
        <div class="list-item" v-for="item in itemList" :key="item.hpcontent_id" @click="toDetail(item)">
          <p class="title">{{_formatTimeTitle(item.maketime)}}</p>
          <p class="volume">{{item.hp_title}}</p>
          <div class="img-wrapper">
            <img :src="item.hp_img_url" alt="">
          </div>
          <p class="author-title">{{item.hp_author.split('＆')[0]}} | {{item.image_authors}}</p>
          <p class="forward">{{item.hp_content.split('by')[0]}}</p>
          <p class="author">{{item.text_authors}}</p>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import { getOnePageList } from '@/api/getData'
import { getDate } from '@/assets/js/util'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      itemList: [],
      scrollOptions: {
        pullUpLoad: true
      },
      currentDate: ''
    }
  },
  methods: {
    _formatTimeTitle (dateStr) {
      return dateStr.slice(0, 10).replace(/-/g, ' / ')
    },
    onPullingUp () {
      this._getOnePageList(this.currentDate)
    },
    _getOnePageList (currentDate) {
      this.currentDate = getDate(currentDate)
      getOnePageList(this.currentDate).then((res) => {
        this.itemList = this.itemList.concat(res.data.data)
      })
    },
    toDetail (item) {
      this.setOneImageTextDetail(item)
      this.$router.push({name: 'OneDetail', params: {id: item.hpcontent_id}})
    },
    ...mapMutations({
      setOneImageTextDetail: 'SET_ONE_IMAGE_TEXT_DETAIL'
    })
  },
  created () {
    this._getOnePageList()
  },
  mounted () {
    this.$refs.scrollWrapper.style.height = document.body.clientHeight + 'px'
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/stylus/variable'
.one-wrapper
  width 100%
  .list-item-wrapper
    .list-item
      width 100%
      border-bottom 10px solid $color-background
      padding-bottom 25px
      .title
        text-align center
        padding-top 16px
        color $color-opacity-title
        font-size 20px
        line-height 22px
        font-family: 'Courier New'
      .volume
        margin-top 6px
        text-align center
        font-size $color-text-small
        color $color-title
      .img-wrapper
        img
          width 100%
          height auto
          margin 15px 0
      .author-title
        text-align center
        color $color-title
        font-size $color-text-small
      .forward
        color $color-opacity-title
        font-size 14px
        line-height 26px
        margin 20px 20px 18px 20px
      .author
        text-align center
        font-size $color-text-small
        color $color-title
</style>
