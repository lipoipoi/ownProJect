<template>
    <div class="container">
      <div class="container_inner">
        <SlideBar></SlideBar>
        <div class="author_container">
            <div class="penal">
                <div class="bread_head"><a href="/">主页</a> / {{author}}  收藏的话题</div>
                <List :list ='collections'></List>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    import SlideBar from './../common/SlideBar.vue'
    import List from './../common/List.vue'
    export default{
        data(){
            return {collections:'',author:this.$route.query.loginname}
        },
        mounted:function(){
            const that =this;
            this.$http({url:"https://cnodejs.org/api/v1/topic_collect/"+this.$route.query.loginname,method:'get'})
            .then((res)=>that.collections=res.data.data)
            .catch((err)=>console.log(err))
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

.bread_head a{
    color: #80bd01;
    text-decoration: none;
}
</style>