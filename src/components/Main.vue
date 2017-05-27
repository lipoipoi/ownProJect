<template>
  <div class="container">
      <div class="container_inner">
        <SlideBar></SlideBar>
        <div class="containerList">
            <div class="listHeader">
              <a v-for="(typeItem,i) in type" :class="i==defaultActive?'activeTypeBtn':''" class="typeBtn" href="javascript:void(0)" @click="changeActive(i,typeItem.tab)">{{typeItem.name}}</a>
            </div>
            <List :list="list"></List>
          <Pages v-on:getIndex='getPageIndex' :pageVal="pageVal" ref="pageControl"></Pages>
        </div>
      </div>
  </div>
</template>

<script>
module.exports = {
  data :function() {
    return {
      type:[{name:'全部',tab:""},{name:'精华',tab:"good"},{name:'分享',tab:'share'},{name:'问答',tab:'ask'},{name:'招聘',tab:'job'}],
      defaultActive:0,
      list:[],
      pageVal:{current:1,allPage:400}
    }
  },
  vuex:{
    
  }
  ,
  methods:{
    changeActive:function(index,tab,page){
      page = page || 1; 
      var that =this;
      that.defaultActive =index;
      that.$http({method:'get',url:'https://cnodejs.org/api/v1/topics',params:{page:page,tab:tab,limit:40,mdrender:"false"}})
      .then((res)=>{that.list = res.data.data;})
      .catch((error)=>console.log(error));
      this.$refs.pageControl.firstPage();
    },
    getPageIndex:function(data){
      var that =this;
      that.$http({method:'get',url:'https://cnodejs.org/api/v1/topics',params:{page:data.current,tab:this.type[that.defaultActive].tab,limit:40,mdrender:"false"}})
      .then((res)=>{that.list = res.data.data;})
      .catch((error)=>console.log(error));
    }
  },
  created:function(){
      var that =this;
      that.$http({method:'get',url:'https://cnodejs.org/api/v1/topics',params:{page:1,tab:'',limit:40,mdrender:"false"}})
      .then((res)=>{that.list = res.data.data;})
      .catch((error)=>console.log(error));
  },
  components:{'Pages':require('./../common/Page.vue'),'SlideBar':require('./../common/SlideBar.vue'),'List':require('./../common/List.vue')}
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
