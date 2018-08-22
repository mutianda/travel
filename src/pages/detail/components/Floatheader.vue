<template>
  <div>
    <router-link to="/" class="header-abs" v-show="showabs">
      <div class="header-abs-back"><span class="iconfont back-icon">&#xe624;</span></div>
    </router-link>
    <div class="header-fixed" v-show="!showabs" :style="showopacity">
      <router-link to="/">
        <div class="header-fixed-back"><span class="iconfont back-icon">&#xe624;</span></div>
      </router-link>
      <div class="conn"><p>景点详情</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailFloatheader',
  data () {
    return {
      showabs: true,
      showopacity: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      console.log(top)
      if (top > 60) {
        this.showabs = false
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.showopacity = {
          opacity
        }
      } else {
        this.showabs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  .header-abs
    position absolute
    left .2rem
    right 0
    top 1rem
    width .8rem
    line-height .9rem
    border-radius .9rem
    background-color #222
    opacity 0.6
    .header-abs-back
      line-height .8rem
      font-size .3rem
      color white
      text-align center

  .header-fixed
    position fixed
    top: 0
    left 0
    right 0
    overflow hidden
    text-align center
    background-color black
    line-height 1rem
    color white
    border-radius .1rem
    .header-fixed-back
      position absolute
      top 0
      left 0
      width .64rem
      line-height .86 ren
      text-align center
      display inline-block
      .back-icon
        font-size .36rem
        color #eaeaea
    .conn
      width 40%
      text-align center
      display inline-block
      font-size .39rem
      letter-spacing .08rem

</style>
