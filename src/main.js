import 'babel-polyfill';
import Vue from 'vue';
import VueProgressBar from 'vue-progressbar';
import VueScrollTo from 'vue-scrollto';
import { EventBus } from './event-bus';
import firebase from 'firebase';

let config = {
  apiKey: "AIzaSyDY3AuBn7TmKSiDIWKpBkUBvP8nX3jV8PM",
  authDomain: "fuguteam-78d3c.firebaseapp.com",
  databaseURL: "https://fuguteam-78d3c.firebaseio.com",
  projectId: "fuguteam-78d3c",
  storageBucket: "fuguteam-78d3c.appspot.com",
  messagingSenderId: "978580817829",
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
firestore.settings({
  timestampsInSnapshots: true
});
Vue.$db = firestore;


import './modules';
import './mixins';

import App from './App';
import router from './router';
import store from './store';
import i18n from './lang';
import libs from './libs';

Vue.config.productionTip = false;
Vue.$bus = EventBus;
Vue.$store = store;
Vue.$i18n = i18n;
Vue.$libs = libs;

Vue.use(VueScrollTo);
Vue.use(VueProgressBar, {
  color: '#04538e',
  failedColor: '#ff3d55',
  height: '4px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 800
  }
});

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
});
