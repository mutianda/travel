<template>
  <div class="wiper">
  <swiper :options="swiperOption" >
    <!-- slides -->
  <swiper-slide data-swiper-autoplay="2000" v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"
      /></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        speed: 3000,
        autoplay: 3000,
        delay: 0.5,
        autoplayDisableOnInteraction: false
      }
      // swiperList: [{
      //   id: '0001',
      //   'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1808/5e/514ce60160e62602.jpg_750x200_9b0074e2.jpg'
      // }, {
      //   id: '0002',
      //   'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'
      // }, {
      //   id: '0003',
      //   'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg'
      // }, {
      //   id: '0004',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg'
      // }]
    }
  }
  // computed: {
  //   showSwiper () {
  //     return this.list.length
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  .wiper >>> .swiper-pagination-bullet-active
    background-color antiquewhite
  .wiper
    overflow hidden
    width 100%
    height 0
    padding-bottom 27.5%
    .swiper-img
      width 100%
      border #333333 solid .01rem
</style>
