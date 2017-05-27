import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import actions from './actions.js'
import getters from './getters.js'
// 需要维护的状态
const state = {
  user:{
    isLogin:'',
    userInfo:{
      accessToken:'',
      avatar_url:'',
      id:'',
      loginname:''
    }
  }
};

const mutations = {
  // 切换用户信息
  CHANGE_USERINFO(state, data) {
    console.log(state,data);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});