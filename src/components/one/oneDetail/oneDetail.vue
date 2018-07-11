<template>
  <div class="one-detail-wrapper">
    <div class="img-wrapper">
      <img :src="oneImageTextDetail.hp_img_url" alt="">
    </div>
    <div class="content-box">
      <p class="title">
        <span>{{oneImageTextDetail.hp_title}}</span>
        <span>{{oneImageTextDetail.hp_author.split('＆')[0]}} | {{oneImageTextDetail.image_authors}}</span>
      </p>
      <div class="date-bar">
        <p class="day">{{formatDate.day}}</p>
        <p class="month-year">{{formatDate.month}}.{{formatDate.year}}</p>
        <p class="underline"></p>
      </div>
      <p class="text-content">{{textContent}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'oneImageTextDetail'
    ]),
    formatDate () {
      let { maketime } = this.oneImageTextDetail
      maketime = new Date(maketime).toDateString().split(' ')
      let [, month, day, year] = maketime
      return {month, day, year}
    },
    textContent () {
      if (this.oneImageTextDetail.hp_content.includes('by')) {
        return this.oneImageTextDetail.hp_content.split('by')[0]
      } else {
        return this.oneImageTextDetail.hp_content.split('from')[0]
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/stylus/variable'
.one-detail-wrapper
  width 100%
  .img-wrapper
    width 100%
    img
      margin 10px 0
      width 100%
      height auto
  .content-box
    padding 0 20px
    .title
      display flex
      justify-content space-between
      margin-bottom 20px
      font-size 13px
      color $color-text
    .date-bar
      text-align center
      .day
        font-size 48px
        line-height 48px
        font-family Serif
      .month-year
        font-size 14px
        margin-bottom 10px
        line-height 32px
      .underline
        width 30%
        height 1px
        margin 20px auto
        background-color #eee
    .text-content
      line-height 26px
      font-size 16px
      color $color-text
</style>
