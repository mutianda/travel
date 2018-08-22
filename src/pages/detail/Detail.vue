<template>
    <div>
      <detail-header></detail-header>
      <detail-banner :bannerImg="bannerImg" :sightName="sightName"></detail-banner>
      <detail-floatheader></detail-floatheader>
      <div class="content">
      </div>
    </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailFloatheader from './components/Floatheader'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      gallaryImgs: [],
      sightName: '',
      bannerImg: ''
    }
  },
  components: {
    DetailHeader,
    DetailBanner,
    DetailFloatheader
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
