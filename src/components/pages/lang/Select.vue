<template>
  <div>
    <layout-introduction v-if="!lang"/>
    <router-view></router-view>
  </div>
</template>

<script>
import LayoutIntroduction from '@/components/layouts/common/Introduction';
export default {
  components: {
    LayoutIntroduction
  },
  props: {
    lang: {
      type: String,
      default: null
    }
  },
  mounted() {
    if(!this.lang) {
      this.$router.push(`/${this.getLocale}`);
    }
  },
  updated() {
    if(!this.lang) {
      this.$router.push(`/${this.getLocale}`);
    }
  },
  metaInfo () {
    return {
      title: this.$t(`meta-select-lang-title`),
      meta: [{
        name: `description`,
        content: this.$t(`meta-select-lang-description`),
      }, {
        name: `keywords`,
        content: this.$t(`meta-select-lang-keywords`),
      }]
    };
  }
};
</script>
