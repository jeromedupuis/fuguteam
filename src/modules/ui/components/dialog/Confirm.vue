<template>
  <transition name="modal" appear>
    <div class="c-overlay" v-if="showDialog" @click.self="hideConfirmDialog()">
      <div class="c-dialog p-confirmation-modal">
        <div class="p-confirmation-modal__container">
          <div class="p-confirmation-modal__main-container">
            <div class="p-confirmation-modal__title">
              {{ this.dialog.title }}
            </div>
            <div class="p-confirmation-modal__description">
              <p v-html="this.dialog.description"></p>
            </div>
          </div>
          <div class="p-confirmation-modal__button-container">
            <button class="c-ripple p-confirmation-modal__cancel-button" @click.prevent="hideConfirmDialog()">
              <div class="c-ripple__effect-before c-ripple__effect--regular"></div>
              キャンセル
              <div class="c-ripple__effect c-ripple__effect--regular"></div>
            </button>
            <div class="p-confirmation-modal__line"></div>

            <button class="c-ripple p-confirmation-modal__button" @click="onButtonClick($event)" >
              <div class="c-ripple__effect-before c-ripple__effect--regular"></div>
                OK
              <div class="c-ripple__effect c-ripple__effect--regular"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="sass">
  @import "../../assets/sass/dialog/confirm";
</style>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      showDialog: false,
      dialog: {
        title: null,
        description: null,
      }
    };
  },
  mounted() {
    Vue.$bus.$on("setConfirmDialog", (data) => {
      this.showDialog = true;
      this.dialog = {
        title: data.title,
        description: data.description,
        submit: data.submit
      };
    });
  },
  methods: {
    getButton(key) {
      return this.dialog[key];
    },
    onButtonClick() {

      let submit = this.getButton('submit');
      submit();
      this.hideConfirmDialog();
    },
    hideConfirmDialog() {
      this.showDialog = false;
      this.dialog = {};
    }
  }
};
</script>
