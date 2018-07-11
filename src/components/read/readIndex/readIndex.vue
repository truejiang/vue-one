<template>
  <div class="read-list-wrapper">
    <div class="inner-wrapper" ref="scrollWrapper">
      <cube-scroll
      ref="scroll"
      :data="readList">
        <div class="list-item"
          v-for="item in readList"
          :key="item.item_id"
          @click="toRead(item.item_id)">
          <p class="category-title">- {{ !!item.tag_list[0] ? item.tag_list[0].title : '阅读'}} -</p>
          <div class="content-box">
            <p class="content-title">{{item.title}}</p>
            <p class="author">文 / {{item.author.user_name}}</p>
            <img class="img" :src="item.img_url">
            <p class="forward">{{item.forward}}</p>
            <p class="date">{{item.post_date.split(' ')[0].replace(/-/g, '/')}}</p>
          </div>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import { getReadingList } from '@/api/getData'
export default {
  data () {
    return {
      readList: []
    }
  },
  created () {
    this._getReadingList()
  },
  mounted () {
    this.$refs.scrollWrapper.style.height = document.body.clientHeight + 'px'
  },
  methods: {
    _getReadingList () {
      getReadingList().then((res) => {
        this.readList = this.readList.concat(res.data.data)
      })
    },
    toRead (id) {
      this.$router.push({name: 'ReadDetail', params: {id}})
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/stylus/variable'
@import '~@/assets/stylus/mixin'
.read-list-wrapper
  width 100%
  .inner-wrapper
    background-color $color-background
    .list-item
      padding 0 20px
      width 100%
      background-color $color-white
      margin-bottom 10px
      .category-title
        color $color-opacity-title
        line-height 1.85em
        font-size 0.875em
        text-align center
        padding 0.7143em 0
      .content-box
        .content-title
          font-size 1.375em
          line-height 1.4em
          max-height 2.8em
        .author
          color $color-opacity-title
          line-height 1.875em
          margin-top 0.3125em
        .img
          width 100%
          height auto
          margin 0.625em 0
        .forward
          font-size 0.875em
          color $color-opacity-title
          overflowHiddenEllipsisLines(26px, 2)
        .date
          font-size 10px
          padding 1.8em 0 2.5em 0
          color $color-title
</style>
