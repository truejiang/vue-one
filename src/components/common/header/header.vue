<template>
  <div class="header-wrapper">
    <div class="menu-btn" @click="showSlider">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menulines1188101easyiconnet"></use>
      </svg>
    </div>
    <h2 class="title">一个</h2>
    <div class="search">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-huabanfuben"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showSlider () {
      this.$emit('showSlider')
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/stylus/variable'
.header-wrapper
  background-color #ffffff
  width 100%
  height 44px
  line-height 44px
  position fixed
  top 0
  left 0
  font-size 14px
  padding 0 10px
  display flex
  justify-content space-around
  color $color-header
  z-index 99
  .menu-btn
    font-size 26px
    flex 0 0 30px
    width 30px
    text-align left
  .title
    flex 1
    text-align center
    font-size $color-text-size
  .search
    flex 0 0 30px
    width 30px
    font-size 26px
    text-align right
</style>
