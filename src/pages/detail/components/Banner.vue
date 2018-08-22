<template>
  <div class="header">
    <div class="banner" @click="handleGallaryClick">
      <img
        class="banner-img"
        :src='bannerImg'/>
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-num"><span class="iconfont banner-icon">
          &#xe692;
        </span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="gallaryImgs"
      v-show="showGallary"
      @close="handleGallaryClose">
    </common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'Banner',
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: Array
  },
  data () {
    return {
      imgs: [],
      showGallary: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleGallaryClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      bottom 0
      left 0
      right 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .36rem
        padding .2rem .3rem
        letter-spacing .04rem
      .banner-num
        float right
        padding-top .2rem
        padding-right  .3rem
        border-radius .2rem
        font-size .36rem
        display inline-block
        .banner-icon
          font-size .4rem
          margin .1rem
</style>
