<template>
  <router-link to="/" class="site-logo">
    <span ref="siteLogo">
      <img src="/static/img/svg/hook.svg" /> <span>{{ name }} <small v-if="subtitle">{{ subtitle }}</small></span>
    </span>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      name: 'FUGU TEAM'
    };
  },
  props: {
    subtitle: {
      type: String,
      required: false,
      default: null
    }
  }
};
</script>
