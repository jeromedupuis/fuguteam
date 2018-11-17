import PageAdminNewsList from 'modules/news/components/admin/list/List';
import PageAdminNewsCreate from 'modules/news/components/admin/create/Create';
import PageAdminNewsEdit from 'modules/news/components/admin/edit/Edit';
import PageAdminLogout from 'modules/admin/components/pages/logout/Logout';
import PageAdminLogin from 'modules/admin/components/pages/login/Login';
import PageAdminIndex from 'modules/admin/components/pages/index/Index';

export default [
  {
    path: '/admin/',
    name: 'PageAdminIndex',
    component: PageAdminIndex,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/logout',
    name: 'PageAdminLogout',
    component: PageAdminLogout
  },
  {
    path: '/admin/login',
    name: 'PageAdminLogin',
    component: PageAdminLogin,
    meta: {
      guest: true
    }
  },
  {
    path: '/admin/module/news',
    name: 'PageAdminNewsList',
    component: PageAdminNewsList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/module/news/create',
    name: 'PageAdminNewsCreate',
    component: PageAdminNewsCreate,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/module/news/edit/:id',
    name: 'PageAdminNewsEdit',
    component: PageAdminNewsEdit,
    props: true,
    meta: {
      requiresAuth: true
    }
  }
];
