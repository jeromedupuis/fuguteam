<template>
  <div class="section-project_list">
    <div class="row">
      <div class="col-4" :class="[{ 'is--empty':!project.img }]" v-for="(project, index) in projects" :key="index">
        <div class="section-project_listItem">
          <img :src="`/static/img/${project.img}`" :alt="project.title" v-if="project.img"/>
          <h4>{{ project.title }}</h4>
          <p class="text--description">
            {{ project.description }}
          </p>
          <p class="text--date">{{ project.date | moment('YYYY.MM.DD') }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    onlyIndex: {
      type: Boolean,
      default: false,
      required: false
    }
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
