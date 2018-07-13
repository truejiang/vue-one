<template>
  <div class="atricle-footer-wrapper">
    <p class="atricle-editor text-oblique">{{atricleFooterInfo.complieName}}</p>
    <p class="atricle-copyright text-oblique">{{atricleFooterInfo.copyright}}</p>
    <div class="atricle-author-info" v-if="false">
      <p class="author-title">作者</p>
      <div class="author-info">
        <div class="photo">
          <img :src="atricleFooterInfo.atricleAuthorInfo.photo_url" alt="">
        </div>
        <div class="name">
          <p class="author-name">{{atricleFooterInfo.atricleAuthorInfo.user_name}}</p>
          <p class="author-summary">{{atricleFooterInfo.atricleAuthorInfo.summary}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    atricleFooterInfo: {
      type: Object,
      default () {
        return {
          complieName: '',
          copyright: '',
          atricleAuthorInfo: {
            user_name: '',
            summary: '',
            photo_url: ''
          }
        }
      }
    },
    showAuthor: false
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/stylus/variable'
.atricle-footer-wrapper
  width 100%
  text-align left
  .text-oblique
    color $color-title
    font-style oblique
    margin 20px 0
    font-size 12px
  .atricle-author-info
    .author-title
      position relative
      padding 10px 0
      font-size 15px
      margin-top 60px
      margin-bottom 10px
      &:after
        position absolute
        content ''
        display block
        width 70px
        height 4px
        bottom 0
        background-color #000
    .author-info
      display flex
      .photo
        width 45px
        height 45px
        flex 0 0 45px
        margin-right 10px
        img
          width 100%
          height 100%
      .name
        flex 1
        line-height 20px
        font-size 14px
        p
          margin 0
          &.author-summary
            color $color-title
            font-size 10px
</style>
