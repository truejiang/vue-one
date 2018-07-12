<template>
  <div class="read-detail-wrapper">
    <div class="inner-wrapper">
      <div class="content-box">
        <h2 class="title">{{content.hp_title}}</h2>
        <hr class="underline">
        <p class="author">文 / {{content.hp_author}}</p>
        <div class="text-content" v-html="content.hp_content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle } from '@/api/getData'
export default {
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  data () {
    return {
      content: ''
    }
  },
  created () {
    this._getArticle()
  },
  methods: {
    _getArticle () {
      getArticle(this.id).then((res) => {
        this.content = Object.assign({}, res.data.data)
        console.log(this.content)
      })
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/variable'
.read-detail-wrapper
  .inner-wrapper
    width 100%
    padding 44px 20px 0 20px
    .title
      color $color-text
      font-size 28px
      font-weight bold
      line-height 1.3
      margin-top 30px
    .underline
      width 70px
      margin 15px 20px 14px 0
      border 2px solid $color-text
    .author
      color $color-text
      font-size $color-title-size
      margin-bottom 20px
    .text-content
      line-height 26px
      color $color-opacity-title
      padding-bottom 20px
    .text-content p
      text-align justify
      font-size 18px
      margin-bottom 20px
</style>
