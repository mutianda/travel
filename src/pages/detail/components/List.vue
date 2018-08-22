<template>
    <div >
      <div v-for="(item,index) of list" :key="index">
        <div class="item-title">
        <div class="item-title-icon"></div>
        {{item.title}}</div>
        <div v-if="item.children" class="item-children">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
       </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    overflow: hidden;
    position: relative;
    z-index: 4;
    margin-bottom: -.02rem;
    padding: 0 .4rem;
    height: .88rem;
    background: #fff;
    color: #333;
    width 100%
    margin-left .3rem
    font-size: .42rem;
    line-height: .88rem;
    text-indent: .4rem;
    display inline-block
    border-bottom #cacaca solid .01rem
    .item-title-icon
      display: inline-block;
      position: absolute;
      width: .36rem;
      height: .36rem;
      top: .26rem;
      left: .2rem;
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .3rem;
      background-size: .4rem 3rem;
  .item-children
      padding 0 .3rem
      font-size .3rem
</style>
