<template>
  <div id="app">
    <keep-alive exclude="Detail,Gallary">
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
