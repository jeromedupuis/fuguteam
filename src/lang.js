import Vue from 'vue';
import VueI18n from 'vue-i18n';
import LangStore from './store/lang';

import messages from './lang/index';

Vue.use(VueI18n);

export default new VueI18n({
  locale: LangStore.state.locale,
  messages
});
