<template>
  <layout-default class="page-news_article">
    <template v-if="thisNew">
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
              <div class="box-content" v-html="thisNew.body"></div>
            </div>
          </div>
          <div class="col-3">
            <news-sidebar />
          </div>
        </div>

      </div>
    </template>
  </layout-default>
</template>

<script>
import LayoutDefault from '@/components/layouts/default/Layout';
import LayoutIntroduction from '@/components/layouts/common/Introduction';
import NewsSidebar from './Sidebar';

export default {
  components: {
    LayoutDefault,
    LayoutIntroduction,
    NewsSidebar
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
  async mounted() {
    await this.$store.dispatch('resetOne');
    await this.$store.dispatch('fetchOneNew', {
      id: this.id,
      date: this.date,
      slug: this.slug
    });
  },
  computed: {
    thisNew() {
      return this.$store.getters.getOne;
    }
  }
};
</script>
