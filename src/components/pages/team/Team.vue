<template>
  <layout-default class="page-company">
    <layout-introduction
      title="Team"
      :subtitle="$t('intro-web-agency')"
      :fullscreen="false"
    />

    <team-vision />
    <team-values />
    <team-members />

  </layout-default>
</template>

<script>
import LayoutDefault from '@/components/layouts/default/Layout';
import LayoutIntroduction from '@/components/layouts/common/Introduction';
import TeamMembers from './Members';
import TeamVision from './Vision';
import TeamValues from './Values';

export default {
  components: {
    LayoutDefault,
    LayoutIntroduction,
    TeamMembers,
    TeamVision,
    TeamValues
  },
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 }
    };
  },
  metaInfo () {
    return {
      title: this.$t(`meta-team-title`),
      meta: [{
        name: `description`,
        content: this.$t(`meta-team-description`),
      }, {
        name: `keywords`,
        content: this.$t(`meta-team-keywords`),
      }]
    };
  }
};
</script>
