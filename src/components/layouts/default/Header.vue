<template>
  <div class="layout-default_header" id="siteHeader">
    <site-logo />

    <a @click="openSidebarMenu" class="header-default_navButton"><span></span></a>
    <nav class="layout-default_nav" :class="{'is--visible': isSidebarMenuActive }">
      <default-nav />
    </nav>
  </div>
</template>

<script>
import SelectLang from '../common/SelectLang';
import DefaultNav from './Nav';
import Vue from 'vue';
export default {
  components: {
    SelectLang,
    DefaultNav
  },
  data() {
    return {
      isSidebarMenuActive: false
    };
  },
  watch: {
    "window.location": {
      handler() {
        console.log('beforeRouterUpdate');
      }
    }
  },
  mounted() {
    Vue.$bus.$on('toggleSideMenu', (b) => {
      this.isSidebarMenuActive = b;
      if(this.isSidebarMenuActive) {
        this.toggleBodyClass('addClass', 'is--sideMenuActive');
      } else {
        this.toggleBodyClass('removeClass', 'is--sideMenuActive');
      }
    });
  },
  methods: {
    openSidebarMenu() {
      Vue.$bus.$emit('toggleSideMenu', !this.isSidebarMenuActive);
    },
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
};
</script>
