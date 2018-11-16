<template>
  <layout-default class="page-index">
    <layout-introduction
      title="Skilled cooker for a successful project."
      subtitle="Web Agency"
      lead="We are focused on delivering high-class HTML/CSS markup, VueJs, react SPA development."
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
