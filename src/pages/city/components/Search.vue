<template>
  <div class="search">
    <input class="sinput" type="text" placeholder="  please enter the key words">
  </div>

</template>
<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  .search
    border-top  #cacaca solid .01rem
    background-color black
    height .86rem
    .sinput
      background-color white
      color #555555
      width 80%
      margin-left 10%
      line-height .6rem
      font-size .35rem
      margin-top .11rem
      text-align center
      border-radius .1rem
</style>
