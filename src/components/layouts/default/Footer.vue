<template>
  <div class="layout-default_footer">

    <nav class="layout-default_nav">

      <default-nav class="float--left nav--lang" />

      <ul class="float--right nav--sns">
        <li>
          <a href="#" target="_blank">
            <img src="/static/img/svg/facebook-letter-logo.svg" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <img src="/static/img/svg/twitter-logo.svg" />
          </a>
        </li>
      </ul>
      <div class="clear--both"></div>
    </nav>
  </div>
</template>

<script>
import SelectLang from '../common/SelectLang';
import DefaultNav from './Nav';
export default {
  components: {
    SelectLang,
    DefaultNav
  }
};
</script>
