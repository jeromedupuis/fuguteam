import PageAdminLogin from './components/pages/login/Login';
import PageAdminLogout from './components/pages/logout/Logout';
import PageAdminIndex from './components/pages/index/Index';

export default [
  {
    path: '/admin/login',
    name: 'PageAdminLogin',
    component: PageAdminLogin,
    meta: {
      guest: true
    }
  },
  {
    path: '/admin',
    name: 'PageAdmin',
    component: PageAdminIndex,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/logout',
    name: 'PageAdminLogout',
    component: PageAdminLogout
  }
];
