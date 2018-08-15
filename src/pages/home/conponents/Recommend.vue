<template>
  <div>
    <div class="re-title">热门推荐</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}} </p>
          <p class="item-des"> {{item.des}}</p>
          <button class="item-button">查看详情</button>
          <p class="item-price">{{item.price}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/13/0cd5a9a57ae0d1b9b935ec604ce0f9bf.water.jpg_200x200_9b808f51.jpg',
        title: '南京海底世界',
        des: '精彩海底世界，各种鱼类...',
        price: '￥188元起'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/a3/a37ced8252b273c9.img.jpg_200x200_cfb06983.jpg',
        title: '南京秦淮河夫子庙',
        des: '烟笼寒水月笼沙的凄美',
        price: '￥88元起'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/22/273c38aa938ad97dc8d65eac.jpg_200x200_1f49d1ec.jpg',
        title: '南京中山陵',
        des: '藏风得水之地，孙中山先生陵墓背靠紫金山',
        price: '￥88元起'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '迪士尼乐园',
        des: '精彩童话世界，各种童话人物与你偶遇偶遇偶遇偶遇偶遇',
        price: '￥588元起'
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
    display flex
    height 2.4rem
    margin .07rem .05rem
    background-color black
    .item-img
      width 2.4rem
      height 2.4rem
      padding .1rem
      float :right
    .item-info
      flex 1
      padding .1rem
      .item-title
        line-height .54rem
        font-size .39rem
        color #cacaca
      .item-des
        margin-top .1rem
        line-height .5rem
        color white
        font-size .3rem
        width 4rem
        bottom .04rem
        height .44rem
        ellipsis()
      .item-button
        background-color orangered
        line-height .5rem
        border-radius .07rem
        padding 0 .2rem
        margin-top .4rem
      .item-price
        position: relative;
        top -20%
        left 50%
        color orangered
        font-size .3rem
</style>
