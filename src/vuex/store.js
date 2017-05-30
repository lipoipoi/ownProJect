import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import until from './../until/until'
Vue.use(Vuex);
// 需要维护的状态
const state = {
  user:{
    isLogin:false,
    userInfo:{
      accessToken:'',
      avatar_url:'',
      id:'',
      loginname:''
    }
  },
  list:{
    current:1,
    allPage:400,
    List:[],
    defaultActive:0
  }
}
const getters={
  // 用户state
   token:(state)=>state.user.userInfo.accessToken,
   isLogin:(state)=>state.user.isLogin,
   loginname:(state)=>state.user.userInfo.loginname,
   userInfo:(state)=>state.user.userInfo,
  //  List state
   current:(state)=>state.list.current,
   pageVal:(state)=>state.list,
   defaultActive:(state)=>state.list.defaultActive,
}
const mutations = {
  // 登录成功
  LOGIN_IN(state,data) {
      state.user.isLogin =true;
      state.user.userInfo.accessToken=data.data;
      state.user.userInfo.avatar_url=data.res.avatar_url;
      state.user.userInfo.loginname=data.res.loginname;
      state.user.userInfo.id=data.res.id;
  },
  // 注销
  LOGIN_OUT(state){
      state.user.isLogin =false
      state.user.userInfo.accessToken='';
      state.user.userInfo.avatar_url='';
      state.user.userInfo.loginname='';
      state.user.userInfo.id='';
  },
  // 初始化List
  INIT_LIST(state,data){
    state.list.List=data;
  },
  // 改变类型
  CHANGE_LIST_TYPE(state,data){
    state.list.List =data.data;
    state.list.defaultActive=data.index
  },
  CHANGE_LIST_PAGE(state,data){
    state.list.List =data;
  }
  
};
const actions ={
  // login ACtioons
    goLogin:({commit},token)=>{
        axios({method:'POST',url:'https://cnodejs.org/api/v1/accesstoken',params:{accesstoken:token}})
          .then((content)=>{
            if(content.statusText){
              commit('LOGIN_IN',{data:token,res:content.data});
              until.addCookie("accesstoken",state.user.userInfo.accessToken,'7','/')
             }
         })
      .catch((error)=>console.log(error));
    },
    loginOut:({commit})=>{
      commit('LOGIN_OUT')
    until.deleteCookie("accesstoken",'/')
  },
// List Actions
    initList:({commit})=>{
      axios({method:'get',url:'https://cnodejs.org/api/v1/topics',params:{page:1,tab:'',limit:40,mdrender:"false"}})
      .then((res)=>commit('INIT_LIST',res.data.data))
      .catch((error)=>console.log(error));
    },
    changeType:({commit},options)=>{
      axios({method:'get',url:'https://cnodejs.org/api/v1/topics',params:{page:1,tab:options.tab,limit:40,mdrender:"false"}})
      .then((res)=>{
        const data = {data:res.data.data,index:options.index}
        commit('CHANGE_LIST_TYPE',data)})
      .catch((error)=>console.log(error));
    },
    goPage:({commit},data)=>{
      console.log(data)
      axios({method:'get',url:'https://cnodejs.org/api/v1/topics',params:{page:data.current,tab:data.tab,limit:40,mdrender:"false"}})
      .then((res)=>{
        commit('CHANGE_LIST_PAGE',res.data.data)})
      .catch((error)=>console.log(error));
    }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});