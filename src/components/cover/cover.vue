<template>
  <div class="cover-wrapper" v-if="currentOneList.id > 0">
    <div class="cover-bg" ref="coverBg">
      <div class="text-bar">
        <h2 class="day">{{coverMsg.day}}</h2>
        <p class="date">
          <span>VOL.{{coverMsg.vol}} | {{coverMsg.month}}.{{coverMsg.year}}</span>
        </p>
        <p class="forward">{{coverMsg.forward}}</p>
        <p class="ico">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-down-trangle"></use>
          </svg>
        </p>
      </div>
    </div>
    <div class="preview-list-wrapper">
      <div class="list-item" v-for="(item, index) in currentOneList.content_list" :key="item.id" v-if="index === 1 || index === 4">
        <p class="item-type">{{index === 1 ? '阅读' : '问答'}} |</p>
        <h3 class="item-title">{{item.title}}</h3>
        <p class="item-author">作者 / {{item.author.user_name}}</p>
        <p class="item-desc" v-if="flag" v-html="item.desc"></p>
        <p class="readmore">阅读全文</p>
      </div>
    </div>
    <div class="readmores">更多内容 ></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getArticle } from '@/api/getData'
import { delHtmlTag } from '@/assets/js/util'
export default {
  data () {
    return {
      flag: false
    }
  },
  methods: {
    _getCoverBg () {
      let height = document.body.clientHeight - 44 + 'px'
      this.$nextTick(() => {
        this.$refs.coverBg.style = `height: ${height};background-image: url(${this.currentOneList.content_list[0].img_url})`
      })
    }
  },
  updated () {

  },
  computed: {
    ...mapGetters([
      'currentOneList'
    ]),
    coverMsg () {
      let {date, menu: {vol}, content_list: [{forward}]} = this.currentOneList
      date = new Date(date).toDateString().split(' ')
      let month = date[1]
      let day = date[2]
      let year = date[3]
      return {month, day, year, vol, forward}
    }
  },
  watch: {
    currentOneList (newData, oldData) {
      if (newData.id > 0 || oldData.id > 0) {
        this._getCoverBg()

        this.contentList = this.currentOneList.content_list.forEach((x, index, arr) => {
          if (index === 1 | index === 4) {
            getArticle(x.item_id).then((res) => {
              x.desc = delHtmlTag(res.data.data.hp_content.slice(0, 99))
            }).then(() => {
              this.flag = false
              this.flag = true
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/stylus/variable.styl'
@import '~@/assets/stylus/mixin.styl'
.cover-wrapper
  width 100%
  margin-top 44px
  .cover-bg
    position relative
    background-repeat no-repeat
    background-size cover
    background-position center center
    .text-bar
      position absolute
      left 0
      bottom 0
      color $color-white
      padding 0 20px
      .day
        font-size 48px
        line-height 48px
        font-family serif
      .date
        font-size 19px
        line-height 32px
      .forward
        overflowHiddenEllipsisLines(26, 3)
      .ico
        text-align center
        line-height 36px
        font-size 36px
  .preview-list-wrapper
    padding 0 20px
    .list-item
      padding 10px 0
      margin-top 10px
      margin-bottom 36px
      .item-type
        color #29a7e2
        font-size 13px
        padding 4.5px 0
      .item-title
        color $color-text
        font-size 28px
        font-weight bold
        line-height 1.5
      .item-author
        color $color-text
        font-size 13px
        padding 6px 20px
      .item-desc
        overflowHiddenEllipsisLines(26, 3)
        font-size 16px
        margin 6px 0
      .readmore
        color #29a7e2
        line-height 32px
        font-size 16px
  .readmores
    width 160px
    margin 30px auto
    padding 10px 0
    text-align center
    background-color #f6f6f6
    border 1px solid #ddd
    border-radius 1em
</style>
