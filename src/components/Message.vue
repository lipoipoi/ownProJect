<template>
    <div class="container">
      <div class="container_inner">
          <SlideBar></SlideBar>
          <div class="message_container">
              <div class="penal">
                  <div class="bread_head"><a href="/">主页</a> / 新消息</div>
                  <div class="inner">
                        <p v-if="items.hasnot_read_messages?items.hasnot_read_messages.length == 0:''">无消息</p>
                        <div class="cell message" v-for="item in items.hasnot_read_messages">
                            <span>
                                <router-link :to="{path:'Author',query: {author:item.author.loginname}}"><img :src="item.author.avatar_url" class="lellansin" alt="" :title="item.author.loginname">{{item.author.loginname}}</router-link>
                                回复了你的话题
                                <router-link @click="markOne(item.id)" class="replay_title" :to="{path:'Detail',query: {id:item.topic.id}}">{{item.topic.title}}</router-link>
                            </span>
                        </div>
                  </div>
              </div>
              <div class="penal">
                  <div class="bread_head"><a href="/">主页</a> / 过往信息</div>
                  <div class="inner">
                      <p v-if="items.has_read_messages?items.has_read_messages.length == 0:''">无消息</p>
                      <div class="cell message" v-for="item in items.has_read_messages">
                        <span>
                            <router-link :to="{path:'Author',query: {author:item.author.loginname}}"><img :src="item.author.avatar_url" class="lellansin" alt="" :title="item.author.loginname">{{item.author.loginname}}</router-link>
                            回复了你的话题
                             <router-link class="replay_title" :to="{path:'Detail',query: {id:item.topic.id}}">{{item.topic.title}}</router-link>
                        </span>
                     </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
    import  until from './../until/until.js';
    import SlideBar from './../common/SlideBar.vue';
    import List from './../common/List.vue';
    import {mapGetters} from  'vuex';
    export default{
        data(){
            return{items:[]}
        },
        methods:{
            setTimer:(time)=>until.setTimer(time),
            markOne:function(id){
                this.$http.post('https://cnodejs.org/api/v1/message/mark_one',{accesstoken:this.token})
                .then((res)=>console.log(res))
                .catch((err)=>console.log(err))
            }
        },
        computed:{
            ...mapGetters(['token'])
        },
        mounted:function(){
            if(this.token){
                const that =this;
                this.$http({
                    url:"https://cnodejs.org/api/v1/messages",
                    type:"get",
                    params:{accesstoken:this.token}
                })
                .then((res)=>{
                    that.items=res.data.data
                    console.log(that.items)
                    })
                .catch((err)=>console.log(err))
            }
        },
        watch:{
            token:function(){
                const that =this;
                this.$http({
                    url:"https://cnodejs.org/api/v1/messages",
                    type:"get",
                    params:{accesstoken:this.token}
                })
                .then((res)=>that.items=res.data.data)
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
.message_container{
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
.inner{
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background-color: #fff
}
.cell.message{
    padding: 10px;
}
</style>
