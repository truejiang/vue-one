<template>
  <div id="app">
    <v-header @showSlider="toggleSlider"></v-header>
    <v-slider :show="show" @hideSlider="toggleSlider"></v-slider>
    <keep-alive>
      <router-view class="content-wrapper"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import vHeader from '@/components/common/header/header'
import vSlider from '@/components/common/slider/slider'
import { mapGetters, mapMutations } from 'vuex'
import { getDateList, getOneList } from '@/api/getData'
export default {
  name: 'App',
  data () {
    return {
      show: false
    }
  },
  components: {
    vHeader,
    vSlider
  },
  created () {
    if (this.dateList.length <= 0) {
      getDateList().then((res) => {
        this.setCurrentDate(res.data.data[0])
      }).then(() => {
        getOneList(this.currentDate).then((res) => {
          this.setCurrentOneList(res.data.data)
        })
      })
    }
  },
  methods: {
    ...mapMutations({
      setDateList: 'SET_DATE_LIST',
      setCurrentDate: 'SET_CURRENT_DATE',
      setCurrentOneList: 'SET_CURRENT_ONE_LIST'
    }),
    toggleSlider () {
      this.show === true ? this.show = false : this.show = true
    }
  },
  computed: {
    ...mapGetters([
      'dateList',
      'currentDate',
      'currentOneList'
    ])
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index'
.content-wrapper
  margin-top 44px
  padding-bottom 20px
</style>
