<template>
  <div class="layout-default">
    <layout-header :class="headerClass" :noMainMenu="noMainMenu" />
    <div class="layout-default_wrapper">
      <div class="layout-default_body">
        <slot />
      </div>
    </div>
    <template v-if="!noFooter">
      <layout-footer />
      <layout-copyright />
    </template>
  </div>
</template>

<script>
import LayoutHeader from './Header';
import LayoutFooter from './Footer';
import LayoutCopyright from './Copyright';

export default {
  components: {
    LayoutHeader,
    LayoutFooter,
    LayoutCopyright
  },
  props: {
    headerClass: {
      required: false,
      default: ''
    },
    noFooter: {
      required: false,
      default: false
    },
    noMainMenu: {
      required: false,
      default: false
    }
  }
};
</script>
