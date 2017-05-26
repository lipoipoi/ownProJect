<template>
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
</template>
<script>
    module.exports={
        data:function(){
            return{}
        }
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
</style>