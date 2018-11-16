<template>
  <layout-default>
    <layout-introduction
      title="Services"
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
  }
};
</script>
