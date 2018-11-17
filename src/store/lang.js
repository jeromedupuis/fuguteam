import app from '../main';

const SET_LANG = 'SET_LANG';

const state = {
  locale: navigator.language || navigator.userLanguage || 'en'
};
const getters = {
  getLocale(state) {
    return state.locale;
  }
};
const actions = {
  setLang({commit}, payload) {
    commit(SET_LANG, payload);
  }
};

const mutations = {
  [SET_LANG] (state, payload) {
    app.$i18n.locale = payload;
    state.locale = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
