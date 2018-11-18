<template>
  <ul>
    <li>
      <router-link :to="{ name: 'PageIndex', params: { lang: getLocale } }">{{ $t('nav-top')}}</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'PageTeam', params: { lang: getLocale } }">{{ $t('nav-team')}}</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'PageWorks', params: { lang: getLocale } }">{{ $t('nav-works')}}</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'PageNewsList', params: { lang: getLocale } }">{{ $t('nav-news')}}</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'PageContact', params: { lang: getLocale } }" class="link--contact">{{ $t('nav-contact')}}</router-link>
    </li>
    <li class="li--selectLang">
      <select-lang />
    </li>
  </ul>
</template>

<script>
import SelectLang from '../common/SelectLang';
export default {
  components: {
    SelectLang
  }
};
</script>
