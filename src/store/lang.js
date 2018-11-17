import Vue from 'vue';

const SET_LANG = 'SET_LANG';

const state = {
  locale: navigator.language || navigator.userLanguage || 'en',
  langages: {
    en: 'English',
    fr: 'French',
    ja: 'Japanese'
  }
};
const getters = {
  getLocale(state, getters) {
    if(getters.isLangageExists(state.locale)) {
      return state.locale;
    }
    return 'en';
  },
  getLangages() {
    return state.langages;
  },
  isLangageExists(state) {
    return lang => {
      return lang in state.langages;
    };
  }
};
const actions = {
  setLang({commit, getters}, payload) {

    if(getters.isLangageExists(payload)) {
      commit(SET_LANG, payload);
    } else {
      window.location  = '/';
    }
  }
};

const mutations = {
  [SET_LANG] (state, payload) {
    Vue.$i18n.locale = payload;
    state.locale = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
