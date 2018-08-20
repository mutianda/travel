<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
        <div class="buttonlist">
          <div class="buttonwrapper">
            <div class="button buttonlocal">南京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="buttonlist">
          <div class="buttonwrapper" v-for="item of hotlist"  :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item,key) of cities"
           :key="key"
           :ref="key"
      >
        <div class="title border-topbottom">
          {{key}}
        </div>
        <div class="itemlist">
          <div class="item border-bottom" v-for="inneritem of item" :key="inneritem.id">{{inneritem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    hotlist: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #ffffff
    &:after
      border-color #000000

  .boder-bottem
    &:before
      border-color #eee
  .list
    position absolute
    top 1.77rem
    left: 0
    right 0
    bottom 0
    overflow hidden
    .title
      line-height .64rem
      background-color #000000
      color white
      font-size .4rem
      margin .01rem 0rem .02rem 0rem
      padding-left 5%
    .buttonlist
      overflow hidden
      padding .1rem
      background-color #eee
      .buttonwrapper
        float left
        width 25%
        .button
          line-height .5rem
          padding .1rem 0rem
          margin .1rem
          border #ffffff solid .02rem
          border-radius .1rem
          text-align center
          font-size .4rem
          color #cacaca
          background-color #333
        .buttonlocal
          background-color #111
    .itemlist
      overflow hidden
      .item
        line-height .76rem
        padding-left 5%
        color #000
        font-size .36rem
        border-bottom  #dadaea solid .01rem
</style>
