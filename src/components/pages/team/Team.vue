<template>
  <layout-default class="page-company">
    <layout-introduction
      title="Team"
      :subtitle="$t('intro-web-agency')"
      :fullscreen="false"
    />

    <team-outline />
    <team-members />
    <team-vision />

  </layout-default>
</template>

<script>
import LayoutDefault from '@/components/layouts/default/Layout';
import LayoutIntroduction from '@/components/layouts/common/Introduction';
import TeamOutline from './Outline';
import TeamMembers from './Members';
import TeamVision from './Vision';

export default {
  components: {
    LayoutDefault,
    LayoutIntroduction,
    TeamOutline,
    TeamMembers,
    TeamVision
  },
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 }
    };
  }
};
</script>
