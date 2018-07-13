<template>
  <div class="music-detail-wrapper">
    <div class="cover" v-if="content">
      <div class="cover-bg"
        :style="{backgroundImage: 'url(' + content.cover +')'}"
        :class="[play ? 'playing' : 'playing pause']"></div>
      <div class="play-btn" @click="togglePlay">
        <img class="icon" src="./music-detail-pause.png" v-show="play">
        <img class="icon" src="./music-detail-play.png" v-show="!play">
      </div>
    </div>
    <div class="music-info-header">
      <div class="music-info">
        <p>{{content.title}}</p>
        <p>{{album}}</p>
        <p>{{author}}</p>
      </div>
      <h2 class="text-title">{{content.story_title}}</h2>
      <p class="author-info">文 / {{author}}</p>
    </div>
    <div class="content">
      <div v-html="content.story"></div>
      <atricle-footer
      :showAuthor='true'
      :atricleFooterInfo="atricleFooterInfo"
      v-if="this.atricleFooterInfo.flag"></atricle-footer>
    </div>
  </div>
</template>

<script>
import { getMusicArticle } from '@/api/getData'
import atricleFooter from '@/components/common/atricleFooter/atricleFooter'
export default {
  data () {
    return {
      content: false,
      play: false,
      album: '',
      author: '',
      atricleFooterInfo: {
        flag: false
      }
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  created () {
    this._getMusicArticle()
  },
  methods: {
    _getMusicArticle () {
      getMusicArticle(this.id).then((res) => {
        this.content = Object.assign({}, res.data.data)
        this.album = this.content.info.split('\r\n')[0].split('：')[1]
        this.author = this.content.author_list[0].user_name
        let { charge_edt: complieName, copyright, story_author: {summary, user_name: userName, web_url: photoUrl} } = this.content
        this.atricleFooterInfo = Object.assign({}, {
          complieName,
          copyright,
          atricleAuthorInfo: {
            summary,
            user_name: userName,
            photo_url: photoUrl
          },
          flag: true
        })
      })
    },
    togglePlay () {
      this.play ? this.play = false : this.play = true
    }
  },
  components: {
    atricleFooter
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/variable'
@keyframes playing
  from
    transform rotate(0deg)
  to
    transform rotate(360deg)
.music-detail-wrapper
  .cover
    width 100%
    height 356px
    position relative
    .cover-bg
      position absolute
      left -149px
      top -149px
      width 454px
      height 454px
      border-radius 50%
      background-size cover
      overflow hidden
      border 16px solid #fff
      box-shadow: 0 0 20px 5px rgba(230,230,230,0.6)
      &.playing
        animation playing 8s linear infinite
      &.pause
        animation-play-state paused
    .play-btn
      position absolute
      left 48px
      top 48px
      width 72px
      height 72px
      .icon
        width 100%
        height auto
        position absolute
  .music-info-header
    text-align center
    .music-info
      font-size 14px
      line-height 20px
      margin-top 32px
      color $color-header
    .text-title
      color $color-text
      font-size 28px
      margin 34px 20px 0 20px
      font-weight bold
      line-height 1.3
    .author-info
      font-size 14px
      margin-top 40px
      margin-bottom 30px
  .content
    padding 0 20px
    line-height 30px
    font-weight 300
    font-size 18px
    text-align justify
    color $color-text
    p
      margin-bottom 20px
      &.fr-ft-ns
        margin-bottom 0
        font-size 14px
</style>
