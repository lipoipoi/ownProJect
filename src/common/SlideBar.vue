<template>
     <div class="slideBar">
              <div class="panel friendship" v-if="isLogin">
                <div class="header">个人信息</div>
                <div class="userInfo">
                    <div class="user_big_avatar">
                         <router-link :to="{path:'Author',query: {author:userInfo.loginname}}">
                           <img :src="userInfo.avatar_url" :alt="userInfo.loginname"><span>{{userInfo.loginname}}</span>
                         </router-link>
                    </div>
                    <div class="user_profile">
                        <p class="score">0 积分</p>
                    </div>
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
</template>
<script>
    import { mapGetters,mapActions} from 'vuex'
    export default{
        data(){
            return{}
        },
        computed:{
            ...mapGetters(['isLogin','userInfo']),
        },
    }
</script>
<style>

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
.header{
    border-radius: 3px 3px 0 0;
    padding: 10px;
    background-color: #f6f6f6;
    color: #51585c;
    border-radius: 3px 3px 0 0;
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