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
import {mapActions} from 'vuex'
import until from './until/until'
export default {
  components:{
    Top,Foot
  },
  methods:{
      ...mapActions(['goLogin'])
  },
  created:function(){
    const token= until.getCookieValue('accesstoken')
    if(token){
      this.goLogin(token)
    }
  }

}
</script>

<style>
body{
  background-color: #e1e1e1;
}
</style>
