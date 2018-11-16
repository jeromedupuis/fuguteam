<template>
  <layout-default class="page-news">
    <layout-introduction
      title="NEWS"
      :subtitle="subtitle"
      :fullscreen="false"
    />

    <div class="page--inner page-news_list">

      <div class="row">
        <div class="col-9">
          <div class="page-news_listItem" v-for="(n, index) in news" :key="index">
            <router-link :to="`/news/${n.date}/${n.slug}/${n.id}`">
              <div class="box-title">
                <div class="page-news_date">
                  {{ n.date | moment('YYYY.MM.DD') }}
                </div>
                <h1>{{ n.title }}</h1>
              </div>
              <p class="page-news_description">
                {{ n.description }}
              </p>
            </router-link>
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
import moment from 'moment';
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
    year: {
      required: false
    }
  },
  computed: {
    subtitle() {
      if(this.year) {
        return this.year;
      }
      return `our last news`;
    },
    news() {
      if(!this.year) {
        return this.$store.getters.getNews;
      }
      return this.$store.getters.getNews.filter((x) => {
        return moment(x.date).year() === parseInt(this.year);
      });
    }
  }
};
</script>
