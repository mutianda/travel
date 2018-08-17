<template>
    <ul class="list">
      <li class="item" v-for="(item ,key) of cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  .list
    display flex
    flex-direction column
    position absolute
    top:1.73rem
    right .1rem
    bottom 0
    width .4rem
    justify-content center
    .item
      line-height .3rem
</style>
