import PageNews from '../components/pages/news/News';
import PageNewsList from '../components/pages/news/List';

export default [
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
];
