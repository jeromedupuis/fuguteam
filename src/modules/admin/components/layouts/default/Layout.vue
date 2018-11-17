<template>
  <div class="layout-admin">
    <layout-header />
    <div class="layout-admin_wrapper">
      <layout-sidebar />
      <div class="layout-admin_slot">
        <slot />
      </div>
    </div>
    <ui-dialog-confirm />
  </div>
</template>

<style lang="sass">
  @import "../../../../../assets/sass/variables.scss";
  @import "../../../assets/sass/layouts/default.scss";
</style>

<script>
import LayoutHeader from './Header';
import LayoutSidebar from './Sidebar';

export default {
  components: {
    'layout-header': LayoutHeader,
    'layout-sidebar': LayoutSidebar
  }
};
</script>
