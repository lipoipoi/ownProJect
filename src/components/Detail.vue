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
                                <span>来自 {{getAllName(replyData.tab)}}</span>
                            </div>
                        </div>
                        <div class="innerTopic">
                            <div class="topic_content">
                                <div v-html="replyData.content"></div>
                            </div>
                        </div>
                    </div>
                    <Reply :replyCount="replyData.reply_count" :replyData="replyData.replies"></Reply>
                </div> 
             </div>
      </div>
  </div>
</template>
<script>
    import until from './../until/until.js';
    import SlideBar from './../common/SlideBar.vue'
    import Reply from './../common/Reply.vue'
    export default{
        data(){
            return {replyData:''}
        },
        methods:{
            setTimer:(time)=>until.setTimer(time),
            getAllName:(tab)=>until.getAllName(tab),
        },
        created:function(){
            const that = this;
            this.$http({url:'https://cnodejs.org/api/v1/topic/'+this.$route.query.id,method:'get',params:{mdrender:true}})
            .then((res)=>that.replyData=res.data.data)
            .catch((err)=>console.log(err))
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
.topic_tab>span::before{
    content:"• "
}
.topic_tab>span{
    font-size: 12px;
    color: #838383;
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
</style>