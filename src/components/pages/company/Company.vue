<template>
  <layout-default class="page-company">
    <layout-introduction
      :title="$t('intro-company')"
      :subtitle="$t('intro-web-agency')"
      :fullscreen="false"
    />

    <company-outline />
    <company-members />
    <company-vision />
    <company-map />

  </layout-default>
</template>

<script>
import LayoutDefault from '@/components/layouts/default/Layout';
import LayoutIntroduction from '@/components/layouts/common/Introduction';
import CompanyMap from '../common/Map';
import CompanyOutline from './Outline';
import CompanyMembers from './Members';
import CompanyVision from './Vision';

export default {
  components: {
    LayoutDefault,
    LayoutIntroduction,
    CompanyOutline,
    CompanyMembers,
    CompanyVision,
    CompanyMap
  },
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 }
    };
  },
  metaInfo () {
    return {
      title: this.$t(`meta-company-title`),
      meta: [{
        name: `description`,
        content: this.$t(`meta-company-description`),
      }, {
        name: `keywords`,
        content: this.$t(`meta-company-keywords`),
      }]
    };
  }
};
</script>
