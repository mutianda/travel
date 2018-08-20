<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="sinput " type="text" placeholder="  please enter the key words"/>
    </div>
    <div class="search-con" ref="search" v-show="keyword">
      <ul>
        <li class="searchitem" v-for="item of list" :key="item.id"
            @click="handlecityclick(item.name)">{{item.name}}
        </li>
        <li class="searchitem" v-show="haslist">
          没有匹配的数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handlecityclick (city) {
      // this.$store.dispatch('changecity', city)
      this.changecity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changecity'])
  },
  computed: {
    haslist () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keywords) {
        this.list = []
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  .search
    border-top #cacaca solid .01rem
    background-color black
    height .86rem
    .sinput
      background-color white
      color #555555
      width 80%
      margin-left 10%
      line-height .6rem
      font-size .35rem
      margin-top .15rem
      text-align center
      border-radius .08rem
  .search-con
    z-index: 1
    overflow hidden
    position absolute
    top 1.73rem
    width 100%
    left 0
    right 0
    bottom 0
    background-color #eee
    .searchitem
      line-height .62rem
      font-size .36rem
      color #222
      padding-left 10%
      background-color #fff
      border-bottom #ccc solid .02rem
</style>
