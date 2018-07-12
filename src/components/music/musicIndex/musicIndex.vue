<template>
  <div class="music-wrapper">
    <div class="list-item-wrapper" ref="scrollWrapper">
      <cube-scroll
      ref="scroll"
      :data="itemList"
      :options="scrollOptions"
      @pulling-up="onPullingUp">
        <div class="item-list" v-for="item in itemList" :key="item.id" @click="toMusicDetail(item.item_id)">
          <div class="text-wrapper">
            <p class="category-title">- 音乐 -</p>
            <h2 class="text-title">{{item.title}}</h2>
            <p class="author">{{item.share_list.wx.desc.split(' ')[0]}}</p>
          </div>
          <div class="music-cover">
            <div class="cover">
              <div class="cover-bg">
                <img class="cover-img" :src="item.img_url" alt="">
              </div>
              <div class="paly-btn"></div>
              <img class="copyright-icon" src="./music_copyright_1.png" alt="">
            </div>
            <div class="right"></div>
          </div>
          <div class="text-wrapper">
            <p class="song-info-title">
              <span class="song-name">{{_formatSongInfo(item.share_info.title, item.subtitle)}}</span>
              <span class="singer-name"></span>
            </p>
            <p class="forward">{{item.forward}}</p>
            <p class="date">{{item.post_date.split(' ')[0].replace(/-/g, '/')}}</p>
          </div>
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
      itemList: [],
      id: 0,
      scrollOptions: {
        pullUpLoad: true
      }
    }
  },
  created () {
    this._getMusicList(this.id)
  },
  mounted () {
    this.$refs.scrollWrapper.style.height = document.body.clientHeight + 'px'
  },
  methods: {
    _getMusicList (id) {
      getMusicList(id).then((res) => {
        this.itemList = this.itemList.concat(res.data.data)
        this.id = this.itemList[this.itemList.length - 1].id
      })
    },
    _formatSongInfo (songInfo, albumInfo) {
      let [singer, song] = songInfo.replace('「一个」音乐: ', '').split(' ')
      let album = albumInfo.replace('专辑:', '')
      return `${song} · ${singer} | ${album}`
    },
    toMusicDetail (id) {
      this.$router.push({name: 'MusicDetail', params: {id}})
    },
    onPullingUp () {
      this._getMusicList(this.id)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/stylus/variable'
@import '~@/assets/stylus/mixin'
.music-wrapper
  width 100%
  background-color $color-background
  .item-list
    margin-bottom 10px
    background-color $color-white
    .text-wrapper
      padding 0 20px
      .category-title
        color $color-opacity-title
        line-height 1.85em
        font-size 0.85em
        text-align center
        padding 0.7143em 0 1.0714em 0
      .text-title
        font-size 1.375em
        line-height 1.4em
        max-height 2.8em
      .author
        font-size 1em
        line-height 1.875em
        color $color-opacity-title
        margin-top 0.3125em
        padding 0 2.5em 0 0
      .song-info-title
        font-size 0.625em
        line-height 1.4em
        color #808080
        margin-top 1em
      .forward
        font-size 0.875em
        line-height 1.857em
        max-height 3.714em
        color $color-opacity-title
        margin-top 0.7143em
      .date
        font-size 0.625em
        line-height 1.4em
        padding 1.8em 0 2.5em 0
        color $color-title
    .music-cover
      display flex
      justify-content space-around
      height 15.125em
      margin 0.625em 0
      background-image url(music-list-right.png)
      background-position center right
      background-repeat no-repeat
      background-size auto 100%
      .cover
        width 18.6875em
        flex 0 0 18.6875em
        height 100%
        border-radius 0 9.9em 10em 0
        box-shadow 0 0 0.625em 0.125em rgba(230, 230, 230, 0.5)
        position relative
        .cover-bg
          position absolute
          top 0.5em
          left 4.0625em
          width 14.125em
          height 14.125em
          border-radius 50%
          backgroundImage('music-list-paceholder.png')
          overflow hidden
          .cover-img
            width 100%
            height 100%
        .paly-btn
          position absolute
          left 9.75em
          top 6.1875em
          width 2.75em
          height 2.75em
          overflow hidden
          backgroundImage('play_btn_empty.png')
          background-size auto
        .copyright-icon
          position absolute
          left 20px
          bottom 0.5em
          width 1.5em
          height 1.5em
      .right
        flex 1
        height 100%
</style>
