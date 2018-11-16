export default {
  computed: {
    getLocale() {
      return this.$store.getters.getLocale;
    }
  },
  methods: {
    displayByLocale(val) {
      if(val instanceof Object && this.getLocale in val) {
        return val[this.getLocale];
      }
      return val;
    }
  }
};
