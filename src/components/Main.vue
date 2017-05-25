<template>
  <div class="container">
      <div class="container_inner">
        <div class="slideBar">
              <div class="panel">
                  <p>CNode：Node.js专业中文社区</p>
                  <div>
                    您可以
                      <a href="/signin">登录</a>
                    或
                      <a href="/signup">注册</a>
                    , 也可以
                      <a href="/auth/github">
                      <span class="span-info">
                        通过 GitHub 登录
                      </span>
                    </a>
                  </div>
              </div>
              <div class="panel ads">
                  <a href="http://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&amp;utm_medium=content_pic_pc&amp;utm_campaign=multicloud&amp;utm_content=gift&amp;ytag=cnodejs" target="_blank" class="banner sponsor_outlink" data-label="ucloud-banner">
                    <img src="//dn-cnode.qbox.me/FgQS-GQDfqwAD_v0NuhyYUOUk5MG">
                  </a>
                
                  
                    <div class="sep10"></div>
                  
                  <a href="https://0x6.me/CnodeAD" target="_blank" class="banner sponsor_outlink" data-label="huoqiu">
                    <img src="//dn-cnode.qbox.me/Fh-dDBC360-fT8gaefK0p_hmx_zv">
                  </a>
                
                  
                    <div class="sep10"></div>
                  
                  <a href="https://alinode.aliyun.com/?ref=cnode" target="_blank" class="banner sponsor_outlink" data-label="alinode">
                    <img src="//dn-cnode.qbox.me/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_">
                  </a>
              </div>
              <div class="panel friendship">
                <div class="panel_header">
                    <span class="col_fade">友情社区</span>
                </div>
                  <ol class="friendship-community">
                      <li>
                        <a href="https://ruby-china.org/" target="_blank">
                          <img src="//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png">
                        </a>
                      </li>
                      <div class="sep10"></div>
                      <li>
                        <a href="http://golangtc.com/" target="_blank">
                          <img src="//o4j806krb.qnssl.com/public/images/golangtc-logo.png">
                        </a>
                      </li>
                      <div class="sep10"></div>
                      <li>
                        <a href="http://phphub.org/" target="_blank">
                          <img src="//o4j806krb.qnssl.com/public/images/phphub-logo.png">
                        </a>
                      </li>
                      <div class="sep10"></div>
                      <li>
                        <a href="https://testerhome.com/" target="_blank">
                          <img src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK">
                        </a>
                      </li>
                    </ol>
              </div>
        </div>
        <div class="containerList">
            <div class="listHeader">
              <a v-for="(typeItem,i) in type" :class="i==defaultActive?'activeTypeBtn':''" class="typeBtn" href="javascript:void(0)" @click="changeActive(i,typeItem.tab)">{{typeItem.name}}</a>
            </div>
            <div class="listInner" v-for="(listItem,i) in list">
                <div class="cell">
                  <a href="/"><img :src="listItem.author.avatar_url" class="lellansin" alt="" :title="listItem.author.loginname"></a>
                  <span class="reply_count"><span class="countOfReplies">{{listItem.reply_count}}</span>/<span class="countOfvisits">{{listItem.visit_count}}</span></span>
                  <span v-if="listItem.top" class="replay_top">置顶</span><span v-else :class="listItem.good?'replay_top':'replay_type'">{{listItem.good?'精华':getAllName(listItem.tab)}}</span>
                  <a href="/" class="replay_title">{{listItem.title}}</a>
                  <a href="/" class="lastTime">{{setTimer(listItem.last_reply_at)}}</a>
                </div>
            </div>
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
      list:[]
    }
  },
  methods:{
    changeActive:function(index,tab){
      var that =this;
      that.defaultActive =index;
      that.$http({method:'get',url:'https://cnodejs.org/api/v1/topics',params:{page:1,tab:tab,limit:40,mdrender:"false"}})
      .then(function(res){that.list = res.data.data;console.log(res)})
      .catch((error)=>console.log(error));
    },
    setTimer:(time)=>{
       const now =new Date().getTime();
       const lastTime =new Date(time).getTime();
       if(now-lastTime>60*1000*60*24*365){
          return Math.floor((now-lastTime)/(60*1000*60*24*365))+'年前'
       }else if(now-lastTime>60*1000*60*24*30){
          return Math.floor((now-lastTime)/(60*1000*60*24*30))+'月前'
       }else if(now-lastTime>60*1000*60*24){
         return Math.floor((now-lastTime)/(60*1000*60*24))+'天前'
       }else if(now-lastTime>60*1000*60){
         return Math.floor((now-lastTime)/(60*1000*60))+'小时前'
       }else  if(now-lastTime>60*1000){
         return Math.ceil((now-lastTime)/(60*1000))+'分钟前'
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
          break;
      }
    }
  },
  created:function(){
      var that =this;
      that.$http({method:'get',url:'https://cnodejs.org/api/v1/topics',params:{page:1,tab:'',limit:40,mdrender:"false"}})
      .then(function(res){that.list = res.data.data;console.log(that.list)})
      .catch((error)=>console.log(error));
  }
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

.slideBar{
    width: 290px;
    font-size: 14px;
    float: right;
    margin-bottom: 20px;
    min-height: 500px;
}
.panel{
   padding: 10px;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
  line-height: 2em;
  margin-bottom: 13px;
}
.panel  a {
    color: #778087;
    text-decoration: none;
}
.panel  a:hover{
  text-decoration: underline;
}
.sep10 {
    height: 10px;
}
.ads img{
  width: 100%;
}
.friendship-community{
    margin: 4px 0;
    list-style: none;
    padding:0 10px;
}
.friendship-community img{
  width: 150px;
  height: auto;
}
.friendship{
  padding: 0;
}
.panel_header{
    color: #51585c;
    border-radius: 3px 3px 0 0;
    padding: 10px;
    background-color: #f6f6f6;
}
.span-info{
    display: inline-block;
    float: none;
    padding: 3px 10px;
    border: none;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    cursor: pointer;
    letter-spacing: 2px;
    box-shadow: none;
    border-radius: 3px;
    line-height: 2em;
    vertical-align: middle;
    color: #fff;
    background-color: #5bc0de;
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
