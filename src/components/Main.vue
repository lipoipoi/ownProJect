<template>
  <div class="container">
      <div class="container_inner">
        <SlideBar></SlideBar>
        <div class="containerList">
            <div class="listHeader">
              <a v-for="(typeItem,i) in type" :class="i==defaultActive?'activeTypeBtn':''" class="typeBtn" href="javascript:void(0)" @click="changeActive(i,typeItem.tab)">{{typeItem.name}}</a>
            </div>
            <div class="listInner" v-for="(listItem,i) in list">
                <div class="cell">
                  <router-link :to="{path:'Author',query: {author:listItem.author.loginname}}"><img :src="listItem.author.avatar_url" class="lellansin" alt="" :title="listItem.author.loginname"></router-link>
                  <span class="reply_count"><span class="countOfReplies">{{listItem.reply_count}}</span>/<span class="countOfvisits">{{listItem.visit_count}}</span></span>
                  <span v-if="listItem.top" class="replay_top">置顶</span>
                  <span v-else>
                    <span v-if="listItem.tab" :class="listItem.good?'replay_top':'replay_type'">{{listItem.good?'精华':getAllName(listItem.tab)}}</span>
                    </span>
                  <router-link class="replay_title" :to="{path:'Detail',query: {id:listItem.id}}">{{listItem.title}}</router-link>
                  <a href="/" class="lastTime">{{setTimer(listItem.last_reply_at)}}</a>
                </div>
            </div>
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
    setTimer:(time)=>{
       const now =new Date().getTime();
       const lastTime =new Date(time).getTime();
       if(now-lastTime>60*1000*60*24*365){
          return Math.floor((now-lastTime)/(60*1000*60*24*365))+' 年前'
       }else if(now-lastTime>60*1000*60*24*30){
          return Math.floor((now-lastTime)/(60*1000*60*24*30))+' 个月前'
       }else if(now-lastTime>60*1000*60*24){
         return Math.floor((now-lastTime)/(60*1000*60*24))+' 天前'
       }else if(now-lastTime>60*1000*60){
         return Math.floor((now-lastTime)/(60*1000*60))+' 小时前'
       }else  if(now-lastTime>60*1000){
         return Math.ceil((now-lastTime)/(60*1000))+' 分钟前'
       }else{
         return '刚刚'
       }
    },
    getAllName:(tab)=>{
      switch(tab){
        case 'good':
          return '精华'
          break;
        case 'ask':
          return '问答'
          break;
        case 'share':
          return '分享'
          break;
        case 'job':
          return '招聘'
          break;
        default :
          return ''
          break;
      }
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
  components:{'Pages':require('./../common/Page.vue'),'SlideBar':require('./../common/SlideBar.vue')}
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
.lellansin{
      width: 30px;
    height: 30px;
    border-radius: 3px;
    vertical-align: middle;
}
.listInner{
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    line-height: 2em;
}
.countOfReplies{
    color: #9e78c0;
    text-align: center;
}
.countOfvisits{
    font-size: 10px;
    color: #b4b4b4;
}
.reply_count{
  width: 70px;
  text-align: center;
  display: inline-block
}
.replay_title{
      color: #333;
      text-decoration: none;
}
.replay_title:hover{
  text-decoration: underline;
}
.replay_top{
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
}
.replay_type{
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
}
.lastTime{
  float: right;
  margin-right: 10px;
  color: #778087;
  min-width: 50px;
  display: inline-block;
  text-align: right;
  text-decoration: none;
  font-size: 12px;
}
</style>
