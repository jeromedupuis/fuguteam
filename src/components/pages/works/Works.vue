<template>
  <layout-default class="page-works">
    <layout-introduction
      title="Works"
      :subtitle="$t('intro-web-agency')"
      :fullscreen="false"
    />

    <div class="box box--wrapper">
      <div class="box-title">
        <h2>PROJECTS</h2>
      </div>
      <div class="text--center">
        <p>We are focused on delivering high-class HTML/CSS markup, VueJs, react SPA development.</p>
      </div>
      <div class="box-content text--center">
        <works-projects />
      </div>
    </div>
    <works-clients />
  </layout-default>
</template>

<script>
import LayoutDefault from '@/components/layouts/default/Layout';
import LayoutIntroduction from '@/components/layouts/common/Introduction';
import WorksClients from '../common/Clients';
import WorksProjects from '../common/Projects';

export default {
  components: {
    LayoutDefault,
    LayoutIntroduction,
    WorksClients,
    WorksProjects
  },
  metaInfo () {
    return {
      title: this.$t(`meta-works-title`),
      meta: [{
        name: `description`,
        content: this.$t(`meta-works-description`),
      }, {
        name: `keywords`,
        content: this.$t(`meta-works-keywords`),
      }]
    };
  }
};
</script>
