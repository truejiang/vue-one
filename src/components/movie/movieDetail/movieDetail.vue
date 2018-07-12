<template>
  <div class="movie-detail-wrapper">
    <div class="cover" :style="{backgroundImage: 'url(' + content.detailcover + ')'}"></div>
    <div class="text-bar">
      <h2 class="text-title">{{content.textTitle}}</h2>
      <p class="movie-name">——关于《{{content.title}}》</p>
      <p class="author">文 / {{content.author}}</p>
      <p class="tips">因为api的作者没有提供影视图文详情接口，这里用store合并了下前后的内容，所以没有图片和样式</p>
      <div class="content" v-html="content.content"></div>
    </div>
  </div>
</template>

<script>
import { getMovieDetail } from '@/api/getData'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      content: {}
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    ...mapGetters([
      'movieDetail'
    ])
  },
  created () {
    this._getMovieDetail()
    console.log(this.movieDetail)
  },
  methods: {
    _getMovieDetail () {
      getMovieDetail(this.id).then(res => {
        let obj = this.movieDetail
        this.content = Object.assign(obj, res.data.data)
        console.log(this.content)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/stylus/variable'
.movie-detail-wrapper
  .cover
    width 100%
    height 210px
    background-size cover
    background-position center center
    margin-bottom 17px
  .text-bar
    padding 0 20px
    .text-title
      line-height 40px
      margin-top 30px 20px 0 20px
      font-size 28px
      font-weight bold
      color $color-header
    .movie-name
      font-size 18px
      margin-top 15px
      padding 0 20px
      color $color-text
    .author
      font-size 14px
      margin-top 40px
      margin-bottom 30px
      text-align center
    .tips
      color $color-opacity-title
      line-height 1.5
      font-size 10px
      font-style oblique
      margin-bottom 20px
    .content
      line-height 26px
      text-align justify
      color $color-title
      font-size 14px
</style>
