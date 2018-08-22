<template>
  <div>
    <div class="re-title">热门推荐</div>
    <ul>
      <router-link tag="li"
        class="item"
        v-for="item of recommendList"
        :key="item.id"
        :to= "'/detail/' + item.id"
        @click="handlebannerclick(item.title)"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}} </p>
          <p class="item-des"> {{item.desc}}</p>
          <button class="item-button">查看详情</button>
          <p class="item-price">{{item.price}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: {
      type: Array
    }
  },
  methods: {
    handlebannerclick (banner) {
      // this.$store.dispatch('changecity', city)
      this.changebanner(banner)
    },
    ...mapMutations(['changebanner'])
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
