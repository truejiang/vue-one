<template>
  <div class="movie-wrapper">
    <div class="list-item-wrapper" ref="scrollWrapper">
      <cube-scroll
      ref="scroll"
      :data="itemList"
      :options="scrollOptions"
      @pulling-up="onPullingUp">
        <div class="item-list" v-for="item in itemList" :key="item.id" @click="toDetailPage(item)">
          <div class="text-bar">
            <p class="category-title">- 影视 -</p>
            <h2 class="item-title">{{item.title}}</h2>
            <p class="author">文 / {{item.author.user_name}}</p>
          </div>
          <div class="movie-cover">
            <div class="cover-img">
              <img class="img" :src="item.img_url" alt="">
            </div>
          </div>
          <div class="text-bar">
            <p class="forward">{{item.forward}}</p>
            <p class="movie-name">——关于《{{item.subtitle.replace('电影:', '')}}》</p>
            <p class="date">{{item.post_date.split(' ')[0].replace(/-/g, '/')}}</p>
          </div>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import { getMovieList } from '@/api/getData'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      itemList: [],
      scrollOptions: {
        pullUpLoad: true
      },
      id: 0
    }
  },
  created () {
    this._getMovieList(this.id)
  },
  methods: {
    _getMovieList (id) {
      getMovieList(id).then((res) => {
        this.itemList = this.itemList.concat(res.data.data)
        this.id = this.itemList[this.itemList.length - 1].id
      })
    },
    onPullingUp () {
      this._getMovieList(this.id)
    },
    toDetailPage (item) {
      let { title: textTitle, author: { user_name: author }, share_info: { content } } = item
      this.setMovieDetail({textTitle, author, content})
      this.$router.push({name: 'MovieDetail', params: {id: item.content_id}})
    },
    ...mapMutations({
      setMovieDetail: 'SET_MOVIE_DETAIL'
    })
  },
  mounted () {
    this.$refs.scrollWrapper.style.height = document.body.clientHeight + 'px'
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/stylus/variable'
@import '~@/assets/stylus/mixin'
.movie-wrapper
  width 100%
  background-color $color-background
  .list-item-wrapper
    .item-list
      background-color $color-white
      margin-bottom 10px
      .text-bar
        padding 0 20px
        .category-title
          text-align center
          color $color-opacity-title
          line-height 1.85em
          font-size 0.875em
          padding 0.7143em 0 1.0714em 0
        .item-title
          font-size 1.375em
          overflowHiddenEllipsisLines(30, 2)
        .author
          font-size 1em
          line-height 1.875em
          color $color-opacity-title
          margin-top 0.3125em
          padding 0 2.5em 0 0
        .forward, .movie-name
          font-size 0.875em
          color $color-opacity-title
        .forward
          overflowHiddenEllipsisLines(26, 2)
          margin-top 0.7143em
        .movie-name
          text-align right
        .date
          font-size 0.625em
          line-height 1.4em
          padding 1.8em 0 2.5em 0
          color $color-title
          text-align left
      .movie-cover
        backgroundImage('./movie-list-background.png')
        width 100%
        height 13.75em
        padding 1.8125em 0
        box-shadow 0 0 0.3125em 0.1875em rgba(230, 230, 230, 0.5)
        .cover-img
          margin -.8em auto
          width 20.9375em
          height 12em
          border-radius 0.25em
          overflow hidden
          .img
            width 100%
            height auto
</style>
