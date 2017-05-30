<template>
  <div class="container">
      <div class="container_inner">
            <SlideBar></SlideBar>
             <div class="containerList">
                <div class="detailContainer">
                    <div class="panel">
                        <div class="topic_header">
                            <span class="topic_full_title">
                                <span class="put_top" v-if="replyData.top">置顶</span>
                                <span v-else>
                                    <span class="put_top"  v-if="replyData.good">精华</span>
                                </span>
                                {{replyData.title}}
                            </span>
                            <div class="topic_tab">
                                <span>发布于 {{setTimer(replyData.create_at)}}</span>
                                <span>作者 {{replyData.author?replyData.author.loginname:''}}</span>
                                <span>{{replyData.visit_count}} 次浏览</span>
                                <span>最后一次编辑是 {{setTimer(replyData.last_reply_at)}}</span>
                                <span>来自 {{getAllName(replyData.tab)}}</span><br/>
                                <!--<span class="del" v-if="isSelf"><a @click="delTopic" href="javascript:void(0)">删除</a></span>-->
                                <span class="del" v-if="isCollect"><a v-if="isLogin" @click="delCollect" href="javascript:void(0)" class="collect_btn">取消收藏</a></span>
                                <span class="del" v-else ><a v-if="isLogin" @click="getCollect" href="javascript:void(0)" class="collect_btn">收藏</a></span>
                            </div>
                        </div>
                        <div class="innerTopic">
                            <div class="topic_content">
                                <div v-html="replyData.content"></div>
                            </div>
                        </div>
                    </div>
                    <Reply v-on:initReply="getInitPage" :id='replyData.id' :replyCount="replyData.reply_count" :replyData="replyData.replies"></Reply>
                </div> 
             </div>
      </div>
  </div>
</template>
<script>
    import until from './../until/until.js';
    import SlideBar from './../common/SlideBar.vue'
    import Reply from './../common/Reply.vue';
    import {mapGetters} from 'vuex'
    export default{
        data(){
            return {replyData:'',collects:'',isCollect:false,isSelf:false}
        },
        computed:{
            ...mapGetters(['isLogin','token','loginname','userInfo'])
        },
        methods:{
            setTimer:(time)=>until.setTimer(time),
            getAllName:(tab)=>until.getAllName(tab),
            getInitPage:function(){
                const that = this;
                this.$http({url:'https://cnodejs.org/api/v1/topic/'+this.$route.query.id,method:'get',params:{mdrender:true}})
                .then((res)=>that.replyData=res.data.data)
                .catch((err)=>console.log(err))
            },
            getCollect:function(){
                const that =this;
                this.$http.post("https://cnodejs.org/api/v1/topic_collect/collect",{accesstoken:this.token,topic_id:this.replyData.id})
                .then((res)=>that.isCollect=true)
                .catch((err)=>console.log(err))
            },
            delCollect:function(){
                const that =this;
                this.$http.post("https://cnodejs.org/api/v1/topic_collect/de_collect",{accesstoken:this.token,topic_id:this.replyData.id})
                .then((res)=>that.isCollect=false)
                .catch((err)=>console.log(err))
            },
            delTopic:function(){
                const that =this;
                const obj={reply_id:this.replyData.id,accesstoken:this.token}
                this.$http.post("https://cnodejs.org/api/v1/reply/"+this.replyData.id+"/delete",obj)
                .then((res)=>console.log(res))
                .catch((err)=>console.log(err))
            }
        },
        mounted:function(){
            const that = this;
            this.$http({url:'https://cnodejs.org/api/v1/topic/'+this.$route.query.id,method:'get',params:{mdrender:true}})
            .then((res)=>{
                that.replyData=res.data.data;
                    that.userInfo.id == that.replyData.author_id?that.isSelf=true:that.isSelf=false;
            })
            .catch((err)=>console.log(err))
            if(this.loginname){
            this.$http({url:"https://cnodejs.org/api/v1/topic_collect/"+this.loginname,method:'get'})
             .then((res)=>{
                 that.collects=res.data.data;
                 that.collects.find((item)=>item.id==that.$route.query.id)!=undefined?that.isCollect=true:that.isCollect=false
            })
            .catch((err)=>console.log(err));

            }
            // 
        },
        watch:{
            loginname:function(newVal,oldVal){
                const that =this;
                this.$http({url:'https://cnodejs.org/api/v1/topic/'+this.$route.query.id,method:'get',params:{mdrender:true}})
                .then((res)=>{
                    that.replyData=res.data.data;
                    that.userInfo.id == that.replyData.author_id?that.isSelf=true:that.isSelf=false;
                })
                .catch((err)=>console.log(err))
                this.$http({url:"https://cnodejs.org/api/v1/topic_collect/"+this.loginname,method:'get'})
                .then((res)=>{
                that.collects=res.data.data
                 that.collects.find((item)=>item.id==that.$route.query.id)!=undefined?that.isCollect=true:that.isCollect=false
                })
                .catch((err)=>console.log(err));
            }
        },
        components:{SlideBar,Reply}
    }
</script>
<style>
@import './../css/markdown.css';
.container{
  min-height:800px;
}

.container_inner {
  width: 90%;
  min-width: 960px;
  max-width: 1400px;
  margin: 20px auto;
}
.detailContainer{
    padding: 0;
    margin-right: 305px;
}
.panel{
    margin-bottom: 13px;
    border-radius: 3px 3px 3px 3px;
}
.topic_header{
    background-color: #fff;
    border-radius: 3px 3px 0 0;
    line-height: 1em;
    padding: 0px 0px 10px 0;
    border-bottom: 1px solid #e5e5e5;
        overflow: hidden;
}
.topic_full_title{
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
}
.put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
}
.topic_tab>.del::before{
    content:""
}
.topic_tab>span::before{
    content:"• "
}
.topic_tab>span{
    font-size: 12px;
    color: #838383;
}
.topic_tab>.del a{
    color: #08c;
    font-size:14px;
    margin-top: 15px;
    display: inline-block;
}
.innerTopic{
    font-size: 14px;
    word-break: break-word;
    color: #333;
    line-height: 2em;
    background-color: #fff;
    padding: 10px;
    border-radius: 0 0 3px 3px;
}
.topic_content{
    margin: 0 10px;
}
.topic_tab>.del .collect_btn{
    float: right;
    color: #fff;
    background-color: #6ba44e;
     border-radius: 3px;
     border: none;
    display: inline-block;
    padding: 3px 10px;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    letter-spacing: 2px;
    box-shadow: none;
    line-height: 2em;
    vertical-align: middle;
}
</style>