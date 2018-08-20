<template>
  <div>
    <home-header ></home-header>
    <home-swiper :swiperList = 'swiperList'></home-swiper>
    <home-icons :List = 'iconList'></home-icons>
    <home-recommend :recommendList='recommendList'></home-recommend>
    <home-weekend :weekendList= 'weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './conponents/Header'
import HomeSwiper from './conponents/Swiper'
import HomeIcons from './conponents/Icons'
import HomeRecommend from './conponents/Recommend'
import HomeWeekend from './conponents/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
