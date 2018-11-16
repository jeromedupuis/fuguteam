<template>
  <div class="box box--wrapper section-client_list">
    <div class="box-title">
      <h2>OUR CLIENTS</h2>
    </div>
    <div class="text--center">
      <p>We are focused on delivering high-class HTML/CSS markup, VueJs, react SPA development.</p>
    </div>
    <div class="box-content text--center">
      <div class="row">
        <div class="col-3" :class="[{ 'is--empty':!client.img }]" v-for="(client, index) in clients" :key="index">
          <img :src="`/static/img/${client.img}`" :alt="client.name" v-if="client.img"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    clients() {
      return this.$store.getters.getClients;
    }
  }
};
</script>
