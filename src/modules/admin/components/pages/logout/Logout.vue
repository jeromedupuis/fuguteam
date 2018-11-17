<template>
  <p>Logging out...</p>
</template>


<script>
import firebase from 'firebase';
export default {
  metaInfo () {
    return {
      title: 'Loggin out'
    };
  },
  async mounted() {
    firebase.auth().signOut()
      .then(() => {
        this.$router.push('/');
      })
      .catch(() => {
        this.$router.push('/');
        this.addNotification('An error occured, please try again.');
      });
  }
};
</script>
