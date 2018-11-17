<template>
  <layout-default class="page-contact">
    <layout-introduction
      title="Thank you !"
      subtitle="We will respond you as soon as possible"
      :fullscreen="false"
    />
    <form action="https://formspree.io/info@fugu.team" method="post" novalidate="novalidate">
      <div class="box box--wrapper">
        <div class="page--inner">

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </div>
      </div>
    </form>
    <!-- <company-map /> -->
  </layout-default>
</template>

<script>
import LayoutDefault from '@/components/layouts/default/Layout';
import LayoutIntroduction from '@/components/layouts/common/Introduction';

export default {
  components: {
    LayoutDefault,
    LayoutIntroduction
  }
};
</script>
