<template>
  <div class="header">
    <router-link to="/">
    <div class="h-left" ><span class="iconfont back-icon"></span></div>
    </router-link>
    <div class="conname">{{this.banner}}</div>
    <router-link to="/City">
      <div class="h-right">{{this.city}}<span class="iconfont down-icon">&#xe62b;</span></div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'DetailHeader',
  computed: {
    ...mapState(['city']),
    ...mapState(['banner'])
  }
  // props: {
  //   city: String
  // }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header
    line-height :1rem
    display :flex
    background:$bgColor
    color :#ffffff
    .h-left
      width :.6rem
      float :left
      text-align center
      display inline-block
      padding-right .2rem
      .back-icon
        font-size .35rem
        text-align center
    .conname
      flex :1
      height :.7rem
      line-height .62rem
      margin-top :.15rem
      padding-left :.2rem
      margin-left: .2rem;
      text-align center
      font-size .36rem
      border-radius :.1rem
      color darkgray
      display inline-block
    .h-input
      flex :1
      height :.7rem
      line-height .62rem
      margin-top :.15rem
      padding-left :.2rem
      margin-left: .2rem;
      background-color :#ffffff
      border-radius :.1rem
      color darkgray
      display inline-block
    .h-right
      /*width :1.24rem*/
      float :right
      line-height .62rem
      text-align :center
      display inline-block
      font-size .33rem
      color #cacaca
      padding 0.15rem .15rem
      .down-icon
        font-size .35rem
        padding-left .12rem
</style>
