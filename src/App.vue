<template>
  <div id="app">
    <Top></Top>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Top from './common/Top.vue'
import Foot from './common/Foot.vue'
import 'normalize.css';
export default {
  components:{
    Top,Foot
  }

}
</script>

<style>
body{
  background-color: #e1e1e1;
}
</style>
