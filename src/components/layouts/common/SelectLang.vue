<template>
  <ul class="nav--languages">
    <li class="li--currentLang">
      <a>{{ getLocale | uppercase }}</a>
    </li>
    <li class="li--langList">
      <template v-for="(lang, index) in langages">
        <a @click.prevent="setLang(lang)" :key="index">{{ lang | uppercase }}</a>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      langages: ['ja', 'en', 'fr']
    };
  },
  methods: {
    setLang(lang) {
      let currentUrl = window.location.href;
      let nextUrl = currentUrl.replace(`/${this.getLocale}`, `/${lang}`);
      this.$store.dispatch('setLang', lang);
      history.pushState({
        id: 'pushState'
      }, 'pushState', nextUrl);
    }
  }
};
</script>
