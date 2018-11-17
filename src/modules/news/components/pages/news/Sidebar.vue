<template>
  <div class="page-news_sidebar">
    <div class="box-title">
      <h1>Summary</h1>
    </div>

    <ul>
      <li v-for="(year, index) in years" :key="index"><router-link :to="`/news/${year}`">{{ year }}</router-link></li>
    </ul>

    <div class="page-new_sidebarSns">
      <social-sharing :url="currentUrl" inline-template>
        <div>
          <network network="facebook">
            <img src="/static/img/svg/facebook-letter-logo.svg" />
          </network>
          <network network="linkedin">
            <img src="/static/img/svg/linkedin-logo.svg" />
          </network>
          <network network="twitter">
            <img src="/static/img/svg/twitter-logo.svg" />
          </network>
        </div>
      </social-sharing>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import moment from 'moment';
import _ from 'lodash';
import SocialSharing from 'vue-social-sharing';
Vue.use(SocialSharing);

export default {
  computed: {
    years() {
      let years = [];
      this.$store.getters.getNews.map((x) => {
        years.push(moment(x.date).year());
      });
      return _.uniq(years).sort().reverse();
    },
    currentUrl() {
      return window.location.href;
    }
  }
};
</script>
