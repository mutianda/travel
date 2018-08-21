<template>
  <div class="header">
    <div class="banner" @click="handleGallaryClick">
      <img
        class="banner-img"
        :src='bannerImg'/>
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-num"><span class="iconfont banner-icon">&#xe692;</span>39</div>
      </div>
    </div>
    <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import axios from 'axios'
export default {
  name: 'Banner',
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1706/9b/9b6ce141d1a23b30a3.img.jpg_r_800x800_24dbd8cb.jpg',
        'http://img1.qunarzz.com/sight/p0/1706/9b/9b6ce141d1a23b30a3.img.jpg_r_800x800_24dbd8cb.jpg',
        'http://img1.qunarzz.com/sight/p0/1706/40/403185fe8b31987da3.img.jpg_r_800x800_a6029998.jpg'
      ],
      showGallary: false,
      gallaryImgs: [],
      sightName: '',
      bannerImg: ''
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json')
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // this.city = data.city
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
        this.recommendList = data.recommendList
        this.bannerImg = data.bannerImg
      }
    },
    handleGallaryClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  mounted () {
    this.getDetailInfo()
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
