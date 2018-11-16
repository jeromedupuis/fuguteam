<template>
  <div class="layout-default_footer">

    <nav class="layout-default_nav">

      <ul class="float--left">
        <li>
          <router-link :to="{ name: 'PageIndex' }">{{ $t('nav-top')}}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'PageTeam' }">{{ $t('nav-team')}}</router-link>
        </li>
        <!-- <li>
          <router-link :to="{ name: 'PageCompany' }">{{ $t('nav-company')}}</router-link>
        </li> -->
        <!-- <li>
          <router-link :to="{ name: 'PageServices' }">{{ $t('nav-services')}}</router-link>
        </li> -->
        <li>
          <router-link :to="{ name: 'PageWorks' }">{{ $t('nav-works')}}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'PageNewsList' }">{{ $t('nav-news')}}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'PageContact' }">{{ $t('nav-contact')}}</router-link>
        </li>
      </ul>

      <ul class="float--right nav--languages">
        <li>
          <a @click.prevent="setLang('fr')">FR</a> /
          <a @click.prevent="setLang('en')">EN</a> /
          <a @click.prevent="setLang('ja')">JA</a>
        </li>
      </ul>
      <div class="clear--both"></div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    setLang(lang) {
      this.$store.dispatch('setLang', lang);
    }
  }
};
</script>
