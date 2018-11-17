import Routes from './routes/';
import AdminRoutes from './routes/admin';
import Store from './stores/';
import AdminStore from './stores/admin';
export default {
  routes: [
    ...Routes,
    ...AdminRoutes
  ],
  stores: {
    news: Store,
    newsAdmin: AdminStore
  }
};
