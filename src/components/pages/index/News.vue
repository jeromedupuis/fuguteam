<template>
  <div class="box box--wrapper" v-if="news && news.length">
    <div class="box-title">
      <h2>NEWS</h2>
    </div>
    <div class="page--inner">
      <div class="box-content">
        <div class="page-index_news row">
          <dl class="col-6" v-for="(n, index) in news" :key="index">
            <router-link :to="`/${getLocale}/news/${n.date}/${n.slug}/${n.id}`">
              <dt>{{ n.date | moment('YYYY.MM.DD') }}</dt>
              <dd>{{ n.title }}</dd>
            </router-link>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  async mounted() {
    await this.$store.dispatch('fetchNews');
  },
  computed: {
    news() {
      let news = this.$store.getters.getNews.filter((x) => {
        return x.lang === this.getLocale;
      });
      news.map((x) => {
        x.date = moment(x.date).format('YYYY-MM-DD');
      });
      return news.slice(0,5);
    }
  }
};
</script>
