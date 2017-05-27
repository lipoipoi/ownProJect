<template>
    <div class="penal">
        <div class="header">
            <span class="col_fade">{{replyData?replyData.length:""}} 回复</span>
            <div class="reply_cell"  v-for="(item,index) in replyData" :class="index<=2?'reply_highlight':''">
                <div class="author_detail">
                   <router-link class="user_avatar"  :to="{path:'Author',query: {author:item.author.loginname}}"><img :src="item.author.avatar_url" title="ngot"></router-link>
                    <div class="user_info">
                        <router-link class="dark reply_author" :to="{path:'Author',query: {author:item.author.loginname}}">{{item.author.loginname}}</router-link>
                        <a class="reply_time" href="#58d0fc1a17f61387400b7e16">{{index+1}}楼 • {{setTimer(item.create_at)}}</a>
                    </div>
                    <div class="user_action">
                        <i class="fa up_btn fa-thumbs-o-up"></i><span class="up-count">{{item.ups?item.ups.length:''}}</span>
                    </div>
                </div>
                <div class="reply_detail" > 
                    <div v-html="item.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const until = require('./../until/until.js');
    
    module.exports ={
        data:function(){
            return {}
        },
        methods:{
            setTimer:(time)=>until.default.setTimer(time),
        },
        props:['replyData','replyCount'],
        created:function(){
        }
    }
</script>
<style>
     @import './../css/markdown.css';
    .penal{
        margin-bottom: 13px;
        font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
        background-color: #fff;
        border-radius: 3px 3px 3px 3px;
    }
    .penal a{
        color: #08c; 
    }
    .penal .header{
        padding: 10px;
        background-color: #f6f6f6;
        font-size: 14px;
        word-break: break-word;
        border-radius: 3px 3px 0 0;
        line-height: 20px;
         color: #333;  
    }
    .header .col_fade {
        color: #444;
    }   
    .reply_cell{
            position: relative;
            padding: 10px 0 10px 10px;
            font-size: 14px;
            padding-right: 10px;
            background: #fff;
            border-top: 1px solid #f0f0f0;
    }
    .reply_cell.reply_highlight{
        background-color: #f4fcf0;
    }
    .user_avatar{
        float:left;
    }
    .user_avatar img{
        width: 30px;
        height: 30px;
        border-radius: 3px;
         max-width: 100%;
        vertical-align: middle;
        border: 0;
    }
    .user_info{
        margin-left: 10px;
        display: inline-block;
    }
    a.dark, a.dark:active, a.dark:link, a.dark:visited {
        color: #666;
        text-decoration: none;
        text-overflow: ellipsis;
         text-decoration: none;
    }
    .reply_time {
        font-size: 11px;
        color: #08c; 
         text-decoration: none;
    }
    .user_action{
        float: right;
        margin-left: 20px;
        font-size: 15px;
    }
    .fa{
         font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
    }
    .fa-thumbs-o-up:before {
        content: "\f087";
    }
    .up_btn,.up-count{
        color: gray;
    }
    .reply_detail{
        padding-left: 50px;
    }
</style>