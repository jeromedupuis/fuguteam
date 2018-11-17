import Vue from 'vue';
import Router from 'vue-router';
import _ from 'lodash';

Vue.use(Router);

import firebase from 'firebase';
import PageIndex from '@/components/pages/index/Index';
import PageAbout from '@/components/pages/about/About';
import PageTeam from '@/components/pages/team/Team';
import PageContact from '@/components/pages/contact/Contact';
import PageThanks from '@/components/pages/contact/Thanks';
import PageWorks from '@/components/pages/works/Works';
import PageServices from '@/components/pages/services/Services';

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageIndex',
      component: PageIndex
    },
    {
      path: '/about',
      name: 'PageAbout',
      component: PageAbout
    },
    {
      path: '/team',
      name: 'PageTeam',
      component: PageTeam
    },
    // {
    //   path: '/company',
    //   name: 'PageCompany',
    //   component: PageCompany
    // },
    {
      path: '/contact',
      name: 'PageContact',
      component: PageContact
    },
    {
      path: '/contact-thanks',
      name: 'PageThanks',
      component: PageThanks
    },
    {
      path: '/works',
      name: 'PageWorks',
      component: PageWorks
    },
    {
      path: '/services',
      name: 'PageServices',
      component: PageServices
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


export default router;
