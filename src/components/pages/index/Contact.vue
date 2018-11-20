<template>
  <div class="box box--wrapper">
    <div class="box-title">
      <h2>CONTACT</h2>
    </div>
    <div class="box-content page-index_contact">
      <p>{{ $t("index-contact-text" )}}</p>
      <router-link :to="{ name: 'PageContact', params: { lang: getLocale } }" class="ui-btn btn--main">MAIL</router-link>
    </div>
  </div>
</template>
