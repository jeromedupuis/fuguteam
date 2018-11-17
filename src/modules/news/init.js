import Store from './stores/';
import AdminStore from './stores/admin';

export default {
  stores: {
    news: Store,
    newsAdmin: AdminStore
  }
};
