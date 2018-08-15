<template>
  <div>
    <div class="re-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}} </p>
          <p class="item-des"> {{item.des}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
        title: '南京必游TOP10',
        des: '看尽王侯将相荣辱成败，六朝金粉潮起潮落'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f3/d51669250308cc.jpg_r_640x214_7a127cd0.jpg',
        title: '南京秦淮河夫子庙',
        des: '烟笼寒水月笼沙的凄美'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/e1/cdbf56d837da59.jpg_r_640x214_105fc3f2.jpg',
        title: '南京中山陵',
        des: '藏风得水之地，孙中山先生陵墓背靠紫金山'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ed/8bce72632c9136.jpg_r_640x214_221c04c6.jpg',
        title: '迪士尼乐园',
        des: '精彩童话世界，各种童话人物与你偶遇..'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/mixins.styl"
  .re-title
    padding .03rem .2rem
    margin-top .05rem
    width 100%
    background-color:#cacaca
    text-indent .2rem
    font-size .4rem
    color black
  .item
    overflow hidden
    margin .06rem .05rem
    width 100%
    background-color black
    .item-img-wrapper
      overflow hidden
      width 100%
      height 0
      padding-bottom 39.45%
      .item-img
        width 100%
        padding .02rem .02rem
        border #333333 solid .01rem
    .item-info
      width 100%
      padding .22rem .2rem
      .item-title
        line-height .54rem
        font-size .39rem
        color #cacaca
      .item-des
        margin-top .1rem
        line-height .5rem
        color white
        font-size .3rem
        width 80%
        bottom .04rem
        height .44rem
        ellipsis()
</style>
