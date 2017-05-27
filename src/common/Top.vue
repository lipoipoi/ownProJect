<template>
    <div class="navBar">
        <div class="navBarInner">
            <div class="navContainer">
                    <a href="/" class='logo' ><img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt=""></a>
                    <input type="text" name="q" value="" class="search">
                    <ul class="pullList">
                        <li v-for="item in navList"><router-link :to="item.link">{{item.name}}</router-link></li>
                    </ul>
            </div>
        </div>
    </div>
</template>
<script>
   export default{
        data(){
            return {navList:[{name:'首页',link:'/'},
                {name:'新手入门',link:'/'},
                {name:'API',link:'/'},
                {name:'关于',link:'/'},
                {name:'注册',link:'/'},
                {name:'登录',link:'/login'}]            
        }
        },
        methods:{
            
        }
    }
</script>
<style>
.navBar{
    margin-bottom: 0;
    z-index: 9;
    width: 100%;
    position: relative;
    background: #444;
    font-size: 13px;
    overflow: visible;
    line-height: 20px;
    color: #333;
}
.navBarInner{
    width: 90%;
    min-height: 40px;
    padding: 5px;
    margin: auto;
    background: 0 0;
    border-radius: 0;
    border: none;
    box-shadow: none;
}
.navBarInner::after,.navBarInner::before,.navContainer::after,.navContainer::before{
    display: table;
    line-height: 0;
    content: "";
}
.navContainer{
    min-width: 960px;
    width: 100%;
    margin: 0 auto;
    max-width: 1400px;
    min-height: 40px;
}
.logo{
    width: 120px;
    padding: 3px 20px;
    height: 28px;
    display: block;
    float: left;
    margin-left: -20px;
    font-size: 20px;
    font-weight: 200;
    color: #777;
    text-shadow: 0 1px 0 #fff;
}
.search{
    background: url(https://o4j806krb.qnssl.com/public/images/search.e53b380a.hashed.png) 4px 4px no-repeat #888;
    padding: 3px 5px 3px 22px;
    color: #666;
    border: 0;
    margin-top:7px;
    transition: all .5s;
    margin-bottom: 0;
    font-size: 13px;
    font-weight: 400;
    line-height: 1;
    border-radius: 15px;
    width: 206px;
    display: inline-block;
    height: 20px;
}
.search:focus,.search:hover{
    outline: none;
    background-color: #fff;
}
.pullList{
    margin: 0;
    float: right;
    list-style: none;
}
.pullList li{
    float: left;
}
.pullList li a{
    display: inline-block;
    color:#ccc;
    padding: 10px 15px;
    float: none;
    text-decoration: none;
}
.pullList li a:hover{
    color: #fff;
}
</style>