<template>
  <layout-default class="page-index">
    <layout-introduction
      :title="$t('intro-slogan')"
      :subtitle="$t('intro-web-agency')"
      :lead="$t('intro-description')"
      :animation="true"
    />
    <index-about />
    <index-services />
    <index-works />
    <index-clients />
    <index-news />
    <index-contact />

  </layout-default>
</template>

<script>
import LayoutDefault from '@/components/layouts/default/Layout';
import LayoutIntroduction from '@/components/layouts/common/Introduction';
import IndexAbout from './About';
import IndexServices from './Services';
import IndexClients from '../common/Clients';
import IndexWorks from './Works';
import IndexNews from './News';
import IndexContact from './Contact';

export default {
  metaInfo () {
    return {
      title: this.$t(`meta-index-title`),
      meta: [{
        name: `description`,
        content: this.$t(`meta-index-description`),
      }, {
        name: `keywords`,
        content: this.$t(`meta-index-keywords`),
      }]
    };
  },
  components: {
    LayoutDefault,
    LayoutIntroduction,
    IndexAbout,
    IndexServices,
    IndexWorks,
    IndexClients,
    IndexNews,
    IndexContact
  }
};
</script>
