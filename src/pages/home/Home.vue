<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
    test
  </div>
</template>

<script>
import HomeHeader from './conponents/Header'
import HomeSwiper from './conponents/Swiper'
import HomeIcons from './conponents/Icons'
import HomeRecommend from './conponents/Recommend'
import HomeWeekend from './conponents/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style scoped>

</style>
