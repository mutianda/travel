<template>
  <div class="container" @click="handleGallaryHidden" >
    <div class="back"><span class="iconfont back-icon">&#xe624;</span></div>
    <div class="wrapper">
      <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide data-swiper-autoplay="2000" v-for="(item,index) of imgs" :key="index" >
          <img class="gallary-img" :src="item"/>
        </swiper-slide>
        <!--<swiper-slide data-swiper-autoplay="2000" >-->
          <!--<img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1706/9b/9b6ce141d1a23b30a3.img.jpg_r_800x800_24dbd8cb.jpg"-->
          <!--/></swiper-slide>-->
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return [
        ]
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        speed: 1000,
        autoplay: 2000,
        delay: 0.2,
        autoplayDisableOnInteraction: false,
        paginationType: 'fraction',
        observeParents: true,
        observe: true
      }
    }
  },
  methods: {
    handleGallaryHidden () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background-color #000
    .back
      position absolute
      top .5rem
      left .3rem
      right 0
      bottom 0
      color white
      .back-icon
        font-size .5rem
    .wrapper
      width 100%
      height 0
      padding-bottom 78%
      background-color #000
      .gallary-img
        width 100%
      .swiper-pagination
        color white
        bottom -1rem

</style>
