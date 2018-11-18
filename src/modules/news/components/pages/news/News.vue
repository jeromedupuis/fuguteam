<template>
  <layout-default class="page-news_article">
    <layout-introduction
      :title="newTitle"
      :subtitle="$t('intro-news')"
      :fullscreen="false"
    />

    <section class="section-loader" v-if="isPageLoading || !thisNew">
      <ui-loader-circle />
    </section>

    <div class="page--inner" v-else>

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
  </layout-default>
</template>

<script>
import _ from 'lodash';
import LayoutDefault from '@/components/layouts/default/Layout';
import LayoutIntroduction from '@/components/layouts/common/Introduction';
import NewsSidebar from './Sidebar';

export default {
  metaInfo () {
    return {
      title: _.get(this.thisNew, 'title', this.$t(`meta-news-prefix-title`)),
      meta: [{
        name: `description`,
        content: _.get(this.thisNew, 'meta.description', this.$t(`meta-news-prefix-description`))
      }, {
        name: `keywords`,
        content: _.get(this.thisNew, 'meta.keywords', this.$t(`meta-news-prefix-keywords`))
      }]
    };
  },
  components: {
    LayoutDefault,
    LayoutIntroduction,
    NewsSidebar
  },
  data() {
    return {
      isPageLoading: false
    };
  },
  props: {
    lang: {
      required: true
    },
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
  watch: {
    getLocale(val) {
      if(this.thisNew !== val) {
        this.$router.push(`/${val}/news/`);
      }
    }
  },
  async mounted() {
    this.isPageLoading = true;
    await this.$store.dispatch('fetchNews');
    await this.$store.dispatch('resetOne');
    await this.$store.dispatch('fetchOneNew', {
      id: this.id,
      date: this.date,
      slug: this.slug,
      lang: this.lang
    });
    if(this.thisNew.lang !== this.lang) {
      this.$router.push(`/${this.getLocale}/news/`);
    }
    this.isPageLoading = false;
  },
  computed: {
    thisNew() {
      return this.$store.getters.getOne;
    },
    newTitle() {
      return _.get(this.thisNew, 'title', '...');
    }
  }
};
</script>
