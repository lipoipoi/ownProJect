<template>
   <div class="container">
      <div class="container_inner">
        <SlideBar></SlideBar>
        <div class="login_container">
            <div class="penal">
                <div class="bread_head"><a href="/">主页</a> / 登录</div>
                <div class="login_form">
                    <p class="loginList"><span class="tokenControl">请输入accessToken登录</span><input v-model="token" type="text" class = 'token'></p>
                    <p class="loginList"><span class="tokenControl"></span><a @click="goLogin()" href="javascript:void(0)" class="loginBtn">登录</a></p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>
<script>
    const vuex = require('vuex');
    module.exports ={
        data:function(){
            return {'token':""}
        },
        methods:
        {
            goLogin:function(){
                var that =this;
                that.$http({method:'POST',url:'https://cnodejs.org/api/v1/accesstoken',params:{accesstoken:this.token}})
                .then((res)=>{
                    if(res.statusText){
                        console.log(res)
                    }
                })
                .catch((error)=>console.log(error));
            }
        }
        ,
        components:{'SlideBar':require('./../common/SlideBar.vue')}
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
.login_container{
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
.login_form{
    padding: 50px 10px;
}
.token{
    background-color: #fff;
    border: 1px solid #ccc;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border linear .2s,box-shadow linear .2s;
    -moz-transition: border linear .2s,box-shadow linear .2s;
    -o-transition: border linear .2s,box-shadow linear .2s;
    transition: border linear .2s,box-shadow linear .2s;
    font-size: 14px;
    line-height: 20px;
    color: #555;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    height: 20px;
    padding: 4px 6px;    
    width: 270px;
    font-weight: 400;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
.tokenControl{
    width: 250px;
    padding-right: 50px;
    text-align: right;
    display: inline-block;
    color: #333;
}
.loginList{
    margin: 20px 0;
}
.penal .loginBtn{
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