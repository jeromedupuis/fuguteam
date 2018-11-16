<template>
  <div class="box box--wrapperVertical">
    <div class="box-title">
      <h2>WORKS</h2>
    </div>
    <div class="box-content">
      <works-projects :onlyIndex="true" />
    </div>
  </div>
</template>

<script>
import WorksProjects from '../common/Projects';
export default {
  components: {
    WorksProjects
  }
};
</script>
