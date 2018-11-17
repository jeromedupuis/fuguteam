import Vue from 'vue';
import Router from './router/';
import Store from './store';
import _ from 'lodash';

import adminInit from '@/modules/admin/init.js';
import uiInit from '@/modules/ui/init.js';
import notificationInit from '@/modules/notification/init.js';
import newsInit from '@/modules/news/init.js';

let modules = [
  adminInit,
  uiInit,
  notificationInit,
  newsInit
];

Vue.$module = {
  ui: true,
  admin: true
};

modules.map((module) => {
  if(!module) return;

  let key;
  if('mixins' in module) {
    for(key in module.mixins) {
      let mixin = module.mixins[key];
      Vue.mixin(mixin);
    }
  }

  if('services' in module) {
    for(key in module.services) {
      let service = module.services[key];
      Vue.$service[key] = service;
    }
  }

  if('routes' in module) {
    Router.addRoutes(module.routes);
  }
  if('stores' in module) {
    for(key in module.stores) {
      let store = module.stores[key];
      Store.registerModule(key, store);
    }
  }
  if('lang' in module) {
    for(key in module.lang) {
      if(_.isEmpty(Vue.$service.lang[key])) {
        Vue.$service.lang[key] = {};
      }
      Object.assign(Vue.$service.lang[key], module.lang[key]);
    }
  }
});
