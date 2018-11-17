<template>
  <layout-default>
    <layout-introduction
      :title="$t('intro-about')"
      :subtitle="$t('intro-web-agency')"
      :fullscreen="false"
    />
  </layout-default>
</template>

<script>
import LayoutDefault from '@/components/layouts/default/Layout';
import LayoutIntroduction from '@/components/layouts/common/Introduction';

export default {
  components: {
    LayoutDefault,
    LayoutIntroduction
  },
  metaInfo () {
    return {
      title: this.$t(`meta-about-title`),
      meta: [{
        name: `description`,
        content: this.$t(`meta-about-description`),
      }, {
        name: `keywords`,
        content: this.$t(`meta-about-keywords`),
      }]
    };
  }
};
</script>
