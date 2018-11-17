<template>
  <p>Logging out...</p>
</template>


<script>

export default {
  async mounted() {
    await this.$store.dispatch('logout');
    this.$router.push('/');
  }
};
</script>
