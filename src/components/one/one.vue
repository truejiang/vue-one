<template>
  <div class="one-wrapper"></div>
</template>

<script>
import { getOnePageList } from '@/api/getData'
export default {
  data () {
    return {

    }
  },
  components: {

  },
  created () {
    getOnePageList('2018-07-01').then((res) => {
      console.log(res)
    })
  }
}
</script>

<style scoped lang="stylus">

</style>
