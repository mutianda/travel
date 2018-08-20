<template>
    <ul class="list" >
      <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
      >
        {{item}}
      </li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      // console.log(letters)
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      starty: 0,
      timer: null
    }
  },
  updated () {
    this.starty = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // const starty = this.$refs['A'][0].offsetTop
        // getBoundingClientRect().top
        // const start = this.$refs['A'][0].getBoundingClientRect().top
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 86
          const index = Math.floor((touchY - this.starty) / 20)
          console.log(this.starty)
          console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
      line-height .4rem
      font-size .3rem
</style>
