<template>
    <div class="footMain">
        <div class="footer_inner">
           <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p> 
           <p>服务器赞助商为  ucloud ，存储赞助商为  七牛云存储 ，由  alinode 提供应用性能服务。</p> 
           <p>新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean(<a href="/">https://www.digitalocean.com/</a>)</p> 
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        methods:{
            
        }
    }
</script>
<style>
    .footMain{
    position: relative;
    clear: both;
    background: #fff;
    }
    .footer_inner{
        overflow: hidden;
        padding: 20px 0;
        width: 90%;
        max-width: 1400px;
        min-width: 960px;
        margin: 0 auto;
        background-color: #fff;
        color: #ababab;
        font-size: 14px;
    }
    .footer_inner p{
        margin: 20px 0;
    }
    .footer_inner a{
        color: #08c;
    }
</style>