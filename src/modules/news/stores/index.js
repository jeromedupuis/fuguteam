import Vue from 'vue';
import _ from 'lodash';

const FETCH_NEWS = 'FETCH_NEWS';
const FETCH_ONE_NEW = 'FETCH_ONE_NEW';
const SET_ONE = 'SET_ONE';

const state = {
  list: [],
  one: null
};
const getters = {
  getNews: (state, getters) => {
    return state.list.filter((x) => {
      let locale = getters.getLocale;
      return !x.lang || x.lang === locale;
    });
  },
  getOneNew: state => {
    return (params) => {
      const { id, date, slug } = params;
      return state.list.find((x) => {
        return (x.id === id && x.date === date && x.slug === slug);
      });
    };
  },
  getOne: state => {
    return state.one;
  }
};
const actions = {
  async fetchNews({commit, getters}) {

    let listNews = await getters.getNews;
    if(listNews && listNews.length) {
      commit(FETCH_NEWS, listNews);
      return true;
    }

    let docs = [];
    let querySnapshot = await Vue.$db.collection("news").where("active", "==", true).get();

    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data.id = doc.id;
      docs.push(data);
    });

    commit(FETCH_NEWS, docs);
  },
  async fetchOneNew({commit, getters}, { id, slug, date }) {

    let oneNew = await getters.getOneNew({ id, slug, date });
    if(oneNew) {
      commit(SET_ONE, oneNew);
      return true;
    }

    let querySnapshot = await Vue.$db.collection("news").doc(id).get()
      .catch(() => {
        return false;
      });
    if(querySnapshot) {
      let doc = {
        ...querySnapshot.data(),
        id: querySnapshot.id
      };
      commit(SET_ONE, doc);
      return true;
    }
  },
  resetOne({commit}) {
    commit(SET_ONE, null);
  }
};
const mutations = {
  [FETCH_NEWS] (state, payload) {
    state.list = payload;
  },
  [FETCH_ONE_NEW] (state, payload) {
    let index = _.findIndex(state.list, (doc) => {
      return doc._id === payload._id;
    });

    if(index == -1) {
      state.list.push(payload);
    } else {
      Object.assign(state.list[index], payload);
    }
  },
  [SET_ONE] (state, payload) {
    state.one = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
