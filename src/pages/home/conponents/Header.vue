<template>
  <div class="header">
  <div class="h-left"><span class="iconfont back-icon">&#xe624;</span></div>
  <div class="h-input"><span class="iconfont search-icon">&#xe632;</span>景点/酒店/机票</div>
  <div class="h-right">城市<span class="iconfont down-icon">&#xe62b;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header
    line-height :.8rem
    display :flex
    background $bgColor
    color :#ffffff
    .h-left
      width :.6rem
      float :left
      text-align center
      display inline-block
      .back-icon
        font-size .3rem
        text-align center
    .h-input
      flex :1
      height :.6rem
      line-height .62rem
      margin-top :.12rem
      padding-left :.2rem
      margin-left: .2rem;
      background-color :#ffffff
      border-radius :.1rem
      color darkgray
      display inline-block
    .h-right
      width :1.24rem
      float :right
      text-align :center
      display inline-block
      font-size .3rem
      .down-icon
        font-size .35rem
        padding-left .1rem
</style>
