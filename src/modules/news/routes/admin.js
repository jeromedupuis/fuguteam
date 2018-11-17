import PageAdminNewsList from '../components/admin/list/List';
import PageAdminNewsCreate from '../components/admin/create/Create';
import PageAdminNewsEdit from '../components/admin/edit/Edit';

export default [
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
