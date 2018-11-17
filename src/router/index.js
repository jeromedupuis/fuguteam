import Vue from 'vue';
import Router from 'vue-router';
import _ from 'lodash';
import Meta from 'vue-meta';

Vue.use(Router);
Vue.use(Meta);

import firebase from 'firebase';
import PageIndex from '@/components/pages/index/Index';
import PageSelectLang from '@/components/pages/lang/Select';
import PageAbout from '@/components/pages/about/About';
import PageTeam from '@/components/pages/team/Team';
import PageContact from '@/components/pages/contact/Contact';
import PageThanks from '@/components/pages/contact/Thanks';
import PageWorks from '@/components/pages/works/Works';
import PageServices from '@/components/pages/services/Services';

import PageNews from 'modules/news/components/pages/news/News';
import PageNewsList from 'modules/news/components/pages/news/List';

import PageAdminEntry from 'modules/admin/components/Entry';
import AdminRoutes from 'modules/admin/routes.js';

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: PageSelectLang,
      name: 'PageSelectLang',
      props: true
    },
    {
      path: '/admin',
      component: PageAdminEntry,
      children: AdminRoutes
    },
    {
      path: '/:lang/',
      component: PageSelectLang,
      props: true,
      children: [
        {
          path: '',
          component: PageIndex,
          name: 'PageIndex',
          props: true
        },
        {
          path: 'about',
          component: PageAbout,
          name: 'PageAbout',
          props: true
        },
        {
          path: 'team',
          component: PageTeam,
          name: 'PageTeam',
          props: true
        },
        {
          path: 'contact',
          name: 'PageContact',
          component: PageContact,
          props: true
        },
        {
          path: '/contact-thanks',
          name: 'PageThanks',
          component: PageThanks,
          props: true
        },
        {
          path: '/:lang/works',
          name: 'PageWorks',
          component: PageWorks,
          props: true
        },
        {
          path: '/:lang/services',
          name: 'PageServices',
          component: PageServices,
          props: true
        },
        {
          path: '/:lang/news/:date/:slug/:id',
          name: 'PageNews',
          component: PageNews,
          props: true
        },
        {
          path: '/:lang/news/:year',
          name: 'PageNewsYear',
          component: PageNewsList,
          props: true
        },
        {
          path: '/:lang/news',
          name: 'PageNewsList',
          component: PageNewsList
        }
      ]
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 0 }
      };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach(async (to, from, next) => {
  let nextParams = true;
  if(to.meta) {

    nextParams = false;

    let c_user = null;
    if(to.matched.some(record => record.meta.requiresAuth) || to.matched.some(record => record.meta.guest)) {
      c_user = await new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            resolve(user);
          } else {
            reject(null);
          }
        });
      })
        .catch((err) => {
          return err;
        });
    }
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if(c_user === null) {
        nextParams = {
          path: '/admin/login',
          params: { nextUrl: to.fullPath }
        };
      } else {
        Vue.$store.dispatch('setMe', c_user);
        nextParams = true;
      }
    }
    else if(to.matched.some(record => record.meta.guest)) {
      if(c_user === null){
        nextParams = true;
      }
      else{
        nextParams = {
          path: '/admin'
        };
      }
    }
    else {
      nextParams = true;
    }
  } else {
    nextParams = true;
  }

  if(nextParams === true) {
    if(to.meta.beforeEnter) {
      to.meta.beforeEnter(to, from, next);
    }
    else {
      next();
    }
  }
  else if(_.isObject(nextParams)) {
    next(nextParams);
  }
});


router.beforeResolve(async (to, from, next) => {
  let lang = _.get(to.params, 'lang', 'en');
  if(lang) {
    Vue.$store.dispatch('setLang', lang);
  }
  next(true);
});

export default router;
