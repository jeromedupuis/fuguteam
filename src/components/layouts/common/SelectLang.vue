<template>
  <ul class="float--right nav--languages">
    <li>
      <a @click.prevent="setLang('fr')">FR</a> /
      <a @click.prevent="setLang('en')">EN</a> /
      <a @click.prevent="setLang('ja')">JA</a>
    </li>
  </ul>
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
