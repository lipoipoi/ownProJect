import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
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
  }
}
const getters={
   token:(state)=>state.user.userInfo.accessToken,
   isLogin:(state)=>state.user.isLogin,
   userInfo:(state)=>state.user.userInfo
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
  }
};
const actions ={
    goLogin:({commit},token)=>{
        axios({method:'POST',url:'https://cnodejs.org/api/v1/accesstoken',params:{accesstoken:token}})
          .then((content)=>{
            if(content.statusText){
              commit('LOGIN_IN',{data:token,res:content.data})
             }
         })
      .catch((error)=>console.log(error));
    },
    loginOut:({commit})=>commit('LOGIN_OUT'),
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});