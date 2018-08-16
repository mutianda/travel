<template>
  <div>
    <div class="re-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}} </p>
          <p class="item-des"> {{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: {
      type: Array
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
