<template>
  <layout-admin class="page--newsList">
    <slot-header-title title="ニュースを作成" :icon="null" />

    <form-news @news-submit="onSubmit" />

  </layout-admin>
</template>

<script>
import FormNews from '../form/Form';
import Vue from 'vue';

export default {
  metaInfo () {
    return {
      title: 'ニュースを作成'
    };
  },
  components: {
    FormNews
  },
  methods: {
    onSubmit(formData) {

      Vue.$db.collection('news').add({
        title: formData.title,
        body: formData.body,
        active: formData.active,
        lang: formData.lang,
        date: formData.date,
        slug: formData.slug,
        meta: formData.meta
      })
        .then(() => {
          this.addNotification('New has been created successfully', 'success');
          this.$router.push('/admin/module/news');
        })
        .catch(() => {
          this.addNotification("Error adding document", 'error');
        });
    }
  }
};
</script>
