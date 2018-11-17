import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const SET_ME = 'SET_ME';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

const state = () => {
  return {
    me: {},
    token: null
  };
};

const getters = {
  getMe: state => {
    return state.me;
  }
};
const actions = {
  async setLoggedInUser({commit}, data) {
    await commit(SET_CURRENT_USER, data);
  },
  setMe({commit}, data) {
    commit(SET_ME, data);
  },
  logout({commit}) {
    commit(SET_ME, {});
    commit(SET_CURRENT_USER, null);
  }
};
const mutations = {
  [SET_ME] (state, payload) {
    state.me = payload;
  },
  [SET_CURRENT_USER] (state, payload) {
    state.token = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
