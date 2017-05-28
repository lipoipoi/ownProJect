<template>
  <div class="container">
      <div class="container_inner">
          <SlideBar></SlideBar>
          <div class="author_container">
            <div class="penal">
                <div class="bread_head"><a href="/">主页</a> / 题主个人信息</div>
                <div class="userInfo">
                    <div class="user_big_avatar">
                        <img :src="author.avatar_url" :alt="author.loginname"><span>{{author.loginname}}</span>
                    </div>
                    <div class="user_profile">
                        <p class="score">{{author.score}} 积分</p>
                        <p><router-link class="otherInfo" :to="{path:'Collections',query: {loginname:author.loginname}}">{{collect?collect.length:''}}个话题收藏</router-link></p>
                        <p class="otherInfo">注册时间 {{setTimer(author.create_at)}}</p>
                    </div>
                </div>
            </div>
            <div class="penal">
                <div class="bread_head">最近创建的话题</div>
                <List :list = "author.recent_topics"></List>
            </div>
            <div class="penal">
                <div class="bread_head">最近参与的话题</div>
                <List :list = "author.recent_replies"></List>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
    import  until from './../until/until.js';
    import SlideBar from './../common/SlideBar.vue';
    import List from './../common/List.vue';
    export default{
        data(){
            return{author:'',collect:''}
        },
        methods:{
            setTimer:(time)=>until.setTimer(time),
        },
        mounted:function(){
            const that =this
            this.$http({url:"https://cnodejs.org/api/v1/user/"+this.$route.query.author,method:'get'})
            .then((res)=>{
                that.author = res.data.data;
                return that.$http({url:"https://cnodejs.org/api/v1/topic_collect/"+this.$route.query.author,method:'get'})
                })
            .then((res)=>that.collect=res.data.data)
            .catch((err)=>console.log(err))
        },
        watch:{
            author:function(){
                const that =this
                this.$http({url:"https://cnodejs.org/api/v1/user/"+this.$route.query.author,method:'get'})
                .then((res)=>{
                    that.author = res.data.data;
                    return that.$http({url:"https://cnodejs.org/api/v1/topic_collect/"+this.$route.query.author,method:'get'})
                    })
                .then((res)=>that.collect=res.data.data)
                .catch((err)=>console.log(err))
                }
        },
        components:{SlideBar,List}
    }
</script>
<style>
    .container{
  min-height:800px;
}

.container_inner {
  width: 90%;
  min-width: 960px;
  max-width: 1400px;
  margin: 20px auto;
}
.author_container{
    padding: 0;
    margin-right: 305px;
}
.panel{
    margin-bottom: 13px;
    border-radius: 3px 3px 3px 3px;
}
.bread_head{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    color: #999;
}
.userInfo{
    background-color: #fff;
    border-radius:0 0 3px 3px ;
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    overflow: hidden;
}
.bread_head a{
    color: #80bd01;
    text-decoration: none;
}
.user_big_avatar{
    float: left;
    margin-right: 10px;
}
.user_big_avatar::after{
    clear: both
}
.user_big_avatar img{
    width: 40px;
    height: 40px;
    border-radius: 3px;
    float: left;
    vertical-align: middle;
}
.user_big_avatar span{
    color: #778087;
    margin-left: 10px;
    line-height: 2em;
}
.user_profile{
    clear: both;
    margin-top: 50px;
}
.score{
    color:#333;
}
.penal .otherInfo{
    color: #778087;
    text-decoration: none;
}
</style>
