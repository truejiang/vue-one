<template>
  <div class="slider-wrapper" v-show="show" >
    <div class="menu" ref="menu">
      <ul>
        <li @click="hideSlider">
          <router-link tag="span" to="/one">
            图文
          </router-link>
        </li>
        <li @click="hideSlider">
          <router-link tag="span" to="/read">
            阅读
          </router-link>
        </li>
        <li @click="hideSlider">
          <router-link tag="span" to="/music">
            音乐
          </router-link>
        </li>
        <li @click="hideSlider">
          <router-link tag="span" to="/movie">
            影视
          </router-link>
        </li>
        <li @click="hideSlider">
          <router-link tag="span" to="/about">
            关于
          </router-link>
        </li>
      </ul>
    </div>
    <div class="bg" @click="hideSlider"></div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideSlider () {
      console.log(1)
      this.$emit('hideSlider')
    }
  },
  watch: {
    show (data) {
      let self = this
      setTimeout(() => {
        if (data) {
          self.$refs.menu.style.transform = 'translate3d(0, 0, 0)'
        } else {
          self.$refs.menu.style.transform = 'translate3d(-228px, 0, 0)'
        }
      }, 200)
    }
  }
}
</script>

<style scoped lang="stylus">
.slider-wrapper
  width 100%
  height 100%
  overflow hidden
  position fixed
  z-index 100
  display flex
  top 0
  left 0
  background-color rgba(0, 0, 0, 0.4)
  .menu
    flex 0 0 188px
    width 188px
    height 100%
    background-color #ffffff
    text-align center
    transform translate3d(-188px, 0, 0)
    transition all .3s linear
    box-shadow 5px 0 5px rgba(0,0,0,.15)
    &.show
      transform translate3d(0, 0, 0)
    ul
      margin-top calc(44px - 1em)
      li
        color rgba(0, 0, 0, 0.6)
        span
          display inline-block
          padding  1em
  .bg
    flex 1
    height 100%
</style>
