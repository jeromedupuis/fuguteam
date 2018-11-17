<template>
  <layout-admin-out class="page--login">

    <div class="layout-adminOut_leftSide"></div>
    <div class="layout-adminOut_rightSide">
      <section class="section-container">
        <div class="section-container_head">
          <h1 class="text--shadow">Admin</h1>
        </div>

        <div class="section-container_body">

          <form @submit.prevent="onSubmit" class="form-login">
            <section class="section-formError" v-if="false">
              <p>Form is not valid</p>
            </section>
            <div class="form-group">
              <ui-input-text name="email" placeholder="Your Email" class="is--fluid" v-model="email" />
            </div>
            <div class="form-group">
              <ui-input-password name="password" placeholder="Your Password" class="is--fluid" v-model="password" />
            </div>
            <div class="form-group text--center">
              <ui-input-submit name="submit" label="Access to administration" />
            </div>
            <hr class="fish--hook" />
          </form>

        </div>
      </section>
    </div>
    <div class="clearfix"></div>
  </layout-admin-out>
</template>

<style lang="sass">
  @import "../../../assets/sass/pages/login.scss";
</style>


<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async onSubmit() {

      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        async (doc) => {
          await this.$store.dispatch('setLoggedInUser', doc.user);
          this.$router.push('/admin');
        },
        (err) => {
          this.addNotification('An error occured, please try again', 'error');
          console.warn('err', err);
        }
      );
      return false;
    }
  }
};
</script>
