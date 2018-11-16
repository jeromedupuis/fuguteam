import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import LangStore from './store/lang';
import ClientsStore from './store/clients';
import NewsStore from './store/news';
import ProjectsStore from './store/projects';

export default new Vuex.Store({
  modules: {
    lang: LangStore,
    clients: ClientsStore,
    news: NewsStore,
    projects: ProjectsStore
  }
});
