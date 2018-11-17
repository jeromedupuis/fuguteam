import LayoutAdminOut from '../components/layouts/out/Layout';
import LayoutAdmin from '../components/layouts/default/Layout';
import SlotHeaderTitle from '../components/layouts/default/SlotHeaderTitle';

export default {
  components: {
    'layout-admin-out': LayoutAdminOut,
    'layout-admin': LayoutAdmin,
    'slot-header-title': SlotHeaderTitle
  },
  computed: {
    me() {
      return this.$store.getters.getMe;
    }
  }
};
