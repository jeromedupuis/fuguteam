<template>
  <div class="box box--wrapperVertical" v-if="projects && projects.length">
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
  },
  computed: {
    projects() {
      return this.$store.getters.getProjects.filter((x) => {
        if(this.onlyIndex) {
          return x.index === true;
        }
        return true;
      });
    }
  }
};
</script>
