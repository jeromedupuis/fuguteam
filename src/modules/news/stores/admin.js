import Vue from 'vue';
import _ from 'lodash';

const FETCH_ADMIN_NEWS = 'FETCH_ADMIN_NEWS';
const FETCH_ADMIN_ONE_NEW = 'FETCH_ADMIN_ONE_NEW';

const state = () => {
  return {
    list: []
  };
};

const getters = {
  adminNew: state => {
    return new_id => {
      return state.list.find((doc) => {
        return doc.id == new_id;
      });
    };
  },
  adminNews: state => {
    return state.list;
  }
};
const actions = {
  async adminFetchNews({commit}) {
    let docs = [];
    let querySnapshot = await Vue.$db.collection("news").get();

    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data.id = doc.id;
      docs.push(data);
    });

    commit(FETCH_ADMIN_NEWS, docs);
  }
};
const mutations = {
  [FETCH_ADMIN_NEWS] (state, payload) {
    state.list = payload;
  },
  [FETCH_ADMIN_ONE_NEW] (state, payload) {
    let index = _.findIndex(state.list, (doc) => {
      return doc._id === payload._id;
    });

    if(index == -1) {
      state.list.push(payload);
    } else {
      Object.assign(state.list[index], payload);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
