<template>
  <div class="layout-default_header" id="siteHeader">
    <site-logo />

    <nav class="layout-default_nav">
      <ul>
        <li>
          <router-link :to="{ name: 'PageIndex' }">{{ $t('nav-top')}}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'PageTeam' }">{{ $t('nav-team')}}</router-link>
        </li>
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
          <router-link :to="{ name: 'PageContact' }" class="link--contact">{{ $t('nav-contact')}}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
