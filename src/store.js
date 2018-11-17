import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import LangStore from './store/lang';
import ClientsStore from './store/clients';
import ProjectsStore from './store/projects';
import MembersStore from './store/members';

export default new Vuex.Store({
  modules: {
    lang: LangStore,
    clients: ClientsStore,
    projects: ProjectsStore,
    members: MembersStore
  }
});
