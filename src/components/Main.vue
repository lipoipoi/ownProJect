<template>
  <div class="container">
      <div class="container_inner">
        <SlideBar></SlideBar>
        <div class="containerList">
            <div class="listHeader">
              <a v-for="(typeItem,i) in type" :class="i==defaultActive?'activeTypeBtn':''" class="typeBtn" href="javascript:void(0)" @click="changeActive(i,typeItem.tab)">{{typeItem.name}}</a>
            </div>
            <List :list="pageVal.List"></List>
          <Pages v-on:getIndex='getPageIndex' :pageVal="pageVal" ref="pageControl"></Pages>
        </div>
      </div>
  </div>
</template>

<script>
import Pages from './../common/Page.vue'
import SlideBar from './../common/SlideBar.vue'
import List from './../common/List.vue'
import {mapGetters,mapActions} from 'vuex'
export default {
  data () {
    return {
      type:[{name:'全部',tab:""},{name:'精华',tab:"good"},{name:'分享',tab:'share'},{name:'问答',tab:'ask'},{name:'招聘',tab:'job'}],
    }
  },
  computed:{
      ...mapGetters(['current','pageVal','defaultActive']),
  },
  methods:{
      ...mapActions(['changeType','goPage','initList']),
    changeActive:function(index,tab,page){
      page = page || 1; 
      const obj={index:index,tab:tab,page:tab}
      this.changeType(obj)
    },
    getPageIndex:function(data){
      data.tab=this.type[data.defaultActive].tab
      this.goPage(data)
    }
  },
  mounted:function(){
     this.initList();
  },
  watch:{
     defaultActive:function(){
      this.$refs.pageControl.firstPage();
     }
  },
  components:{Pages,SlideBar,List}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  min-height:800px;
}

.container_inner {
  width: 90%;
  min-width: 960px;
  max-width: 1400px;
  margin: 20px auto;
}

.containerList{
    margin-right: 305px;
    min-height: 500px;
    background:#fff;
}

.listHeader{
  background-color:#f6f6f6;
  border-radius: 3px 3px 0 0;
  padding: 10px;
}
.typeBtn{
    font-size: 14px;
    margin: 0 10px;
    color: #80bd01;
    text-decoration: none;
}
.activeTypeBtn{
    background-color: #80bd01;
    color: #fff;
    padding: 3px 4px;
    border-radius: 3px;
}
</style>
