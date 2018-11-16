<template>
  <gmap-map
    :center="center"
    :zoom="12"
    style="width:100%;  height: 300px;"
  />
</template>

<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCFKHPNCC-tl2znjlCNM1C8znTeesdh7aE",
    libraries: "places",
    mapType: 'sattelite'
  }
});

export default {
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 }
    };
  }
};
</script>
