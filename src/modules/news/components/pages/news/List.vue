<template>
  <layout-default class="page-news">
    <layout-introduction
      title="NEWS"
      :subtitle="subtitle"
      :fullscreen="false"
    />

    <section class="section-loader" v-if="isPageLoading">
      <ui-loader-circle />
    </section>

    <div class="page--inner page-news_list" v-else>

      <div class="row">
        <div class="col-9">
          <template v-if="news && news.length">
            <div class="page-news_listItem" v-for="(n, index) in news" :key="index">
              <router-link :to="`/${getLocale}/news/${n.date}/${n.slug}/${n.id}`">
                <div class="box-title">
                  <div class="page-news_date">
                    {{ n.date | moment('YYYY.MM.DD') }}
                  </div>
                  <h1>{{ n.title }}</h1>
                </div>
                <div class="page-news_description" v-html="n.body"></div>
              </router-link>
            </div>
          </template>
        </div>
        <div class="col-3">
          <news-sidebar />
        </div>
      </div>

    </div>

  </layout-default>
</template>

<script>
import moment from 'moment';
import LayoutDefault from '@/components/layouts/default/Layout';
import LayoutIntroduction from '@/components/layouts/common/Introduction';
import NewsSidebar from './Sidebar';

export default {
  metaInfo () {
    return {
      title: this.$t(`meta-news-title`),
      meta: [{
        name: `description`,
        content: this.$t(`meta-news-description`),
      }, {
        name: `keywords`,
        content: this.$t(`meta-news-keywords`),
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
    year: {
      required: false
    }
  },
  async mounted() {
    this.isPageLoading = true;
    await this.$store.dispatch('fetchNews');
    this.isPageLoading = false;
  },
  computed: {
    subtitle() {
      if(this.year) {
        return this.year;
      }
      return `our last news`;
    },
    news() {
      let news = [];
      if(!this.year) {
        news = this.$store.getters.getNews;
      } else {
        news = this.$store.getters.getNews.filter((x) => {
          return moment(x.date).year() === parseInt(this.year);
        });
      }
      news.map((x) => {
        x.date = moment(x.date).format('YYYY-MM-DD');
      });
      return news;
    }
  }
};
</script>
