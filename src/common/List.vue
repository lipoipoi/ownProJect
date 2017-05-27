<template>
    <div>
               <div class="listInner" v-for="(listItem,i) in list">
                <div class="cell">
                  <router-link :to="{path:'Author',query: {author:listItem.author.loginname}}"><img :src="listItem.author.avatar_url" class="lellansin" alt="" :title="listItem.author.loginname"></router-link>
                  <span class="reply_count"><span class="countOfReplies">{{listItem.reply_count?listItem.reply_count:0}}</span>/<span class="countOfvisits">{{listItem.visit_count?listItem.visit_count:0}}</span></span>
                  <span v-if="listItem.top" class="replay_top">置顶</span>
                  <span v-else>
                    <span v-if="listItem.tab" :class="listItem.good?'replay_top':'replay_type'">{{listItem.good?'精华':getAllName(listItem.tab)}}</span>
                    </span>
                  <router-link class="replay_title" :to="{path:'Detail',query: {id:listItem.id}}">{{listItem.title}}</router-link>
                  <a href="javascript:void(0)" class="lastTime">{{setTimer(listItem.last_reply_at)}}</a>
                </div>
            </div>
    </div>
      
</template>
<script>
    const until = require('./../until/until.js');
    module.exports={
        data:function(){
            return{}
        },
        props:['list'],
        methods:{
            setTimer:(time)=>until.default.setTimer(time),
            getAllName:(tab)=>until.default.getAllName(tab),
        }
    }
</script>
<style>
   
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
  color: #778087!important;
  min-width: 50px;
  display: inline-block;
  text-align: right;
  text-decoration: none;
  font-size: 12px;
}
</style>