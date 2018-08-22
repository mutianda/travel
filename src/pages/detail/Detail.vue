<template>
  <div>
    <detail-header></detail-header>
    <detail-banner :bannerImg="bannerImg" :sightName="sightName"></detail-banner>
    <detail-floatheader></detail-floatheader>
    <detail-list :list="list"></detail-list>
    <div class="content">
    </div>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailFloatheader from './components/Floatheader'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  data () {
    return {
      gallaryImgs: [],
      sightName: '',
      bannerImg: '',
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆连锁销售'
          }, {
            title: '成人三馆普通销售'
          }]
        }, {
          title: '成人五馆联票',
          children: [{
            title: '成人三馆连锁销售'
          }, {
            title: '成人三馆普通销售'
          }]
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  },
  components: {
    DetailHeader,
    DetailBanner,
    DetailFloatheader,
    DetailList
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json')
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // this.city = data.city
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem

</style>
