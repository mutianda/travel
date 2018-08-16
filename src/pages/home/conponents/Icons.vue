<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of List" :key="item.id">
          <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-des">{{item.des}}</p>
           </div>
        </swiper-slide>
      </swiper>
      </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    List: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.List.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/mixins.styl"
    .icons >>> .swiper-container
      height 0
      padding-bottom 50%
      background-color #333333
    .icon
      position: relative
      overflow hidden
      float left
      width 24.52%
      height 0
      margin .2% .02%
      background-color: #333339
      padding-bottom 24.52%
      border-radius 0.3rem
      .icon-img
        position absolute
        top:0
        left 0
        right:0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-des
        position absolute
        left 0
        right 0
        width 80%
        padding-left 10%
        bottom .04rem
        height .44rem
        line-height .44rem
        text-align: center
        color #cacaca
        ellipsis()
</style>
