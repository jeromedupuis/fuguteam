<template>
  <div class="box box--wrapper">
    <div class="box-title">
      <h2>NEWS</h2>
    </div>
    <div class="page--inner">
      <div class="box-content">
        <div class="page-index_news row">
          <dl class="col-6" v-for="(n, index) in news" :key="index">
            <router-link :to="`/news/${n.date}/${n.slug}/${n.id}`">
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
export default {
  computed: {
    news() {
      return this.$store.getters.getNews.slice(0,5);
    }
  }
};
</script>
