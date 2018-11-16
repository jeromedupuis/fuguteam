import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import PageIndex from '@/components/pages/index/Index';
import PageAbout from '@/components/pages/about/About';
import PageCompany from '@/components/pages/company/Company';
import PageContact from '@/components/pages/contact/Contact';
import PageWorks from '@/components/pages/works/Works';
import PageServices from '@/components/pages/services/Services';
import PageNews from '@/components/pages/news/News';
import PageNewsList from '@/components/pages/news/List';

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
      path: '/company',
      name: 'PageCompany',
      component: PageCompany
    },
    {
      path: '/contact',
      name: 'PageContact',
      component: PageContact
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
    },
    {
      path: '/news/:date/:slug/:id',
      name: 'PageNews',
      component: PageNews,
      props: true
    },
    {
      path: '/news/:year',
      name: 'PageNewsYear',
      component: PageNewsList,
      props: true
    },
    {
      path: '/news',
      name: 'PageNewsList',
      component: PageNewsList
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

  if(to.meta) {
    if(to.meta.beforeEnter) {
      to.meta.beforeEnter(to, from, next);
    }
    else {
      next();
    }
  } else {
    next();
  }
});


export default router;
