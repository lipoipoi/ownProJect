<template>
      <div class="container">
      <div class="container_inner">
          <SlideBar></SlideBar>
          <div class="add_container">    
            <div class="panel">  
                <div class="bread_head"><a href="/">主页</a> / 发布话题</div>
                <div class="commit">
                    <div class="commitBox">
                        <div class="commitType">
                            选择版块：<select  v-model="commitType"><option value="0">请选择</option><option v-for="option of type" :value='option.tab'>{{option.name}}</option></select>
                        </div>
                        <input type="text" class="commitTitle" placeholder="标题字数10个以上"  v-model="commitTitle">
                        <textarea class="commitVal" v-model="commitData"></textarea>
                        <div class="commitSubmit">
                            <a href="javascript:void(0)" @click="addTopic" >发布</a>
                        </div>
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
    import {mapGetters} from 'vuex'
    export default{
        data(){
            return{
             commitData:'',commitTitle:'',commitType:'0',
             type:[{name:'分享',tab:'share'},{name:'问答',tab:'ask'},{name:'招聘',tab:'job'}],
            }
        },
        computed:{
                ...mapGetters(['token'])
        },
        methods:{
            addTopic:function(){
                const that =this;
                const obj={tab :this.commitType,title :this.commitTitle,content :this.commitData,accesstoken :this.token}
                this.$http.post("https://cnodejs.org/api/v1/topics",obj)
                .then((res)=>{
                     that.$router.push({path:'/Detail',query: {id:res.data.topic_id}})
                })
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
.add_container{
    padding: 0;
    margin-right: 305px;
}
.add_container .panel{
    margin-bottom: 13px;
    padding: 0;
    border-radius: 3px 3px 3px 3px;
}
.bread_head{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    color: #999;
}

.add_container .commit{
        padding: 0px;
        background-color: #f6f6f6;
    }
 .add_container  .commitType{

    height: 26px;
    margin-bottom: 20px;
 }
  .add_container  .commitType select{
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 4px 6px;
    outline:0 none;
    border-radius: 3px;
    margin-bottom: 10px;
  }
   .add_container  .commitType option{
       width: 150px;   
   }
 .add_container  .commitTitle{
     width: 100%;
    border: 1px solid #ccc;
    height: 30px;
    line-height: 30px;
    margin-bottom: 20px;
        border-radius: 3px;
        padding: 0 2px;
    outline:0 none;
        
 }
 .add_container  .commitBox{
        padding: 10px;
        background-color:#fff;
    }
.add_container .commitVal{
        resize: none;
        border:1px solid #ccc;
        width: 100%;
        height: 240px;
        border-radius: 3px;
    outline:0 none;
    }
.add_container  .commitSubmit{
        text-align: right;
         margin-top: 20px;
    }
 .add_container    .commitSubmit::after{
        clear: both
    }
 .add_container    .commitSubmit a{
    display: inline-block;
    text-decoration: none;
    padding: 3px 30px;
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
</style>
  