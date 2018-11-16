<template>
  <div class="box box--wrapper section-client_list" v-if="clients && clients.length">
    <div class="box-title">
      <h2>{{ $t('our-clients-title') }}</h2>
    </div>
    <div class="text--center">
      <p>{{ $t('our-clients-description') }}</p>
    </div>
    <div class="box-content text--center">
      <div class="row">
        <div class="col-4" :class="[{ 'is--empty':!client.img }]" v-for="(client, index) in clients" :key="index">
          <img :src="`/static/img/${client.img}`" :alt="client.name" v-if="client.img" :class="{'is--invert': client.invert }" />
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
