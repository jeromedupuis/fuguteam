<template>
  <layout-admin class="page--newsList">
    <slot-header-title title="ニュースを編集" :icon="null" />

    <section class="section-loader" v-show="isPageLoading">
      <ui-loader-circle />
    </section>
    <div v-show="!isPageLoading">
      <form-news :defaultData="defaultData" @news-submit="onSubmit" />
    </div>
  </layout-admin>
</template>

<script>
import FormNews from '../form/Form';
import Vue from 'vue';

export default {
  metaInfo () {
    return {
      title: 'ニュースを編集'
    };
  },
  components: {
    FormNews
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      defaultData: {},
      isPageLoading: false
    };
  },
  async mounted() {
    this.isPageLoading = true;
    let querySnapshot = await Vue.$db.collection("news").doc(this.id).get()
      .catch(() => {
        this.addNotification('An error occured', "error");
        this.$router.push('/admin/module/news');
        return false;
      });
    if(querySnapshot) {
      this.defaultData = {
        ...querySnapshot.data(),
        id: querySnapshot.id
      };
    }
    this.isPageLoading = false;
  },
  methods: {
    onSubmit(formData) {

      Vue.$db.collection('news').doc(this.id).set({
        title: formData.title,
        body: formData.body,
        active: formData.active,
        lang: formData.lang,
        date: formData.date,
        slug: formData.slug,
        meta: formData.meta
      })
        .then(() => {
          this.addNotification('New has been edited successfully', 'success');
          //this.$router.push('/admin/module/news');
        })
        .catch(() => {
          this.addNotification("Error adding document", 'error');
        });
    }
  }
};
</script>
