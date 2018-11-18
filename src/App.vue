<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
    <vue-progress-bar />
    <module-notification />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="sass">
  @import "./assets/sass/app.scss";
</style>
