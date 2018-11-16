<template>
  <layout-default v-if="thisNew" class="page-news_article">
    <layout-introduction
      :title="thisNew.title"
      :subtitle="$t('intro-news')"
      :fullscreen="false"
    />

    <div class="page--inner">

      <div class="row">
        <div class="col-9">
          <div class="box-title">
            <div class="page-news_date">
              {{ thisNew.date | moment('YYYY.MM.DD') }}
            </div>
            <h1>{{ thisNew.title }}</h1>
          </div>
          <div class="page-news_articleBody">
            <component :is="`News${thisNew.body}`" />
          </div>
        </div>
        <div class="col-3">
          <news-sidebar />
        </div>
      </div>

    </div>

  </layout-default>
</template>

<script>
import LayoutDefault from '@/components/layouts/default/Layout';
import LayoutIntroduction from '@/components/layouts/common/Introduction';
import NewsSidebar from './Sidebar';

import News20190101 from './body/20190101';

export default {
  components: {
    LayoutDefault,
    LayoutIntroduction,
    NewsSidebar,
    News20190101
  },
  props: {
    id: {
      required: true
    },
    date: {
      required: true
    },
    slug: {
      required: true
    }
  },
  computed: {
    thisNew() {
      return this.$store.getters.getOneNew({
        id: parseInt(this.id),
        date: this.date,
        slug: this.slug
      });
    }
  }
};
</script>
