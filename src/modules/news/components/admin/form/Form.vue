<template>
  <form method="post" @submit.prevent="onSubmit" class="page--newsList_form">
    <div class="row">
      <div class="col-9 page--newsList_formBody">
        <div class="row">
          <div class="col-12">
            <p>タイトル</p>
            <ui-input-text v-model="formData.title" placeholder="タイトル" class="is--fluid" />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>Slug <small>(SEO向け)</small></p>
            <ui-input-text v-model="formData.slug" placeholder="this-is-example" class="is--fluid" />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>ニュース</p>
            <mavon-editor v-model="formData.body" language="en" :htmlCode="true" ref="editor-body" />
          </div>
        </div>

        <div class="row row--meta">
          <h2>META</h2>
          <div class="col-12">
            <p>Description</p>
            <ui-input-text v-model="formData.meta.description" placeholder="meta tags description" class="is--fluid" />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>Keywords</p>
            <ui-input-text v-model="formData.meta.keywords" placeholder="meta, tags, keywords, ..." class="is--fluid" />
          </div>
        </div>
      </div>
      <div class="col-3 page--newsList_formSidebar">
        <div class="row">
          <div class="col-12">
            <p>言語</p>
            <ui-select v-model="formData.lang" :options="langagues" :style="{zIndex:5}"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>日付</p>
            <ui-datepicker v-model="formData.date" :style="{zIndex:4}" />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>公開</p>
            <ui-input-switch-checkbox v-model="formData.active" />
          </div>
        </div>
        <hr />
        <div class="row text--center">
          <div class="col-12">
            <ui-input-submit label="Submit" />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import _ from 'lodash';
import Vue from 'vue';
import moment from 'moment';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
Vue.use(mavonEditor);

export default {
  props: {
    defaultData: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      langagues: [
        {
          label: '日本語',
          value: 'ja'
        },
        {
          label: 'English',
          value: 'en'
        },
        {
          label: 'Français',
          value: 'fr'
        }
      ],
      formData: {
        title: '',
        lang: 'ja',
        active: true,
        body: '',
        date: moment().format('YYYY/MM/DD'),
        slug: '',
        meta: {
          description: '',
          keywords: ''
        }
      }
    };
  },
  watch: {
    defaultData: {
      handler(val) {
        if(val.date.toDate) {
          val.date = val.date.toDate();
        }
        Object.assign(this.formData, val);
      },
      deep: true
    }
  },
  mounted() {
    if(this.defaultData) {
      Object.assign(this.formData, this.defaultData);
    }
  },
  methods: {
    async onSubmit() {
      this.formData.body = _.get(this.$refs, `editor-body.$data.d_render`, '');
      this.formData.slug = this.formData.slug.replace('/', '-');
      if(!this.formData.title) {
        this.addNotification('Title is missing', 'error');
        return false;
      }
      if(!this.formData.slug) {
        this.addNotification('Slug is missing', 'error');
        return false;
      }
      if(!this.formData.body) {
        this.addNotification('New is missing', 'error');
        return false;
      }

      this.$emit('news-submit', this.formData);
    }
  }
};
</script>

<style scoped lang="scss">
  .page--newsList_formBody {
    padding-right: 20px;
  }
  .page--newsList_formSidebar {
    border-radius: 18px;
    padding: 24px;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.4);
  }
  .row--meta {
    margin-top:32px;
    h2 {
      margin-bottom: 22px;
    }
  }
</style>
