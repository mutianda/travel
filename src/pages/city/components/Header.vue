<template>
    <div class="header">
      <router-link to="/">
      <div class="h-left"> <span class="iconfont back-icon">&#xe624;</span></div></router-link>
      <div class="h-content">城市选择</div>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    overflow hidden
    background-color black
    line-height .86rem
    color white
    border-radius .1rem
    .h-left
      line-height .86ren
      text-align center
      display inline-block
      margin-left 2%
      .back-icon
        font-size .33rem
        color #eaeaea
    .h-content
      width 40%
      margin-left 23%
      text-align center
      display inline-block
      font-size .33rem
</style>
