<template>
  <layout-admin class="page--newsList">
    <slot-header-title title="News list" :icon="null" />

    <section class="section-loader" v-if="isPageLoading">
      <ui-loader-circle />
    </section>
    <template v-else>

      <div class="ui-table col--noborder" v-if="news">
        <table>
          <thead>
            <tr>
              <th class="col--id">#</th>
              <th>ニュース名</th>
              <th>言語</th>
              <th>日付</th>
              <!-- <th>記者</th> -->
              <th></th>
              <th></th>
            </tr>
            <tr class="thead--adjustement"></tr>
          </thead>
          <tbody>
            <tr v-for="(one, index) in news" :key="index">
              <td class="col--id">
                <router-link :to="one.link">{{ index+1 }}</router-link>
              </td>
              <td><router-link :to="one.link">{{ one.title | capitalize }}</router-link></td>
              <td>{{ one.lang ? $t(`lang-${one.lang}`) : '' }}</td>
              <td>{{ one.date | moment('YYYY.MM.DD') }}</td>
              <!-- <td>{{ one.author ? one.author.name : '' }}</td> -->
              <td>{{ one.active ? '公開': '非公開' }}</td>
              <td>
                <router-link :to="`/admin/module/news/edit/${one.id}`" class="ui-table_row_icon"><img src="/static/img/svg/034-pencil.svg" /></router-link>
                <a class="ui-table_row_icon" @click.prevent="removeNewConfirm(one)"><img src="/static/img/svg/035-remove.svg" /></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </layout-admin>
</template>

<script>
import Vue from 'vue';
import _ from 'lodash';

export default {
  metaInfo () {
    return {
      title: 'ニュース一覧'
    };
  },
  data() {
    return {
      isPageLoading: false
    };
  },
  computed: {
    news() {
      let news = this.$store.getters.adminNews;
      if(_.isEmpty(news)) return [];
      news.map((x) => {
        x.link = "/admin/module/news/edit/"+x.id;
      });
      return news;
    }
  },
  methods: {
    async removeNew(doc) {
      var query = Vue.$db.collection('news').doc(doc.id);
      let querySnapshot = await query.get();

      querySnapshot.ref.delete()
        .then(() => {
          this.$store.dispatch('adminRemoveNew', doc.id);
          this.addNotification('ニュースが削除されました。', "success");
        })
        .catch(() => {
          this.addNotification('An error occured, please try again.', "error");
        });


    },
    async removeNewConfirm(one) {

      Vue.$bus.$emit("setConfirmDialog", {
        title: 'ニュースを削除',
        description: 'この操作は元に戻せません。削除しますか？',
        submit: () => {
          this.removeNew(one);
        }
      });
    }
  },
  async created() {
    this.isPageLoading = true;
    await this.$store.dispatch('adminFetchNews');
    this.isPageLoading = false;
  }
};
</script>
