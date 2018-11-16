<template>
  <div class="box box--wrapper">
    <div class="box-title">
      <h2>{{ $t('title-members') }}</h2>
    </div>
    <div class="page-company_members page--inner ">
      <div class="row">
        <div class="col-1"></div>
        <div v-for="(member, index) in members" :key="index" :class="[`col-5`]">
          <div class="page-company_membersImage">
            <img :src="member.img" :alt="`${member.role} ${member.name}`" class="img--profile" />
            <div class="page-company_membersKeywords" v-if="member.keywords && member.keywords.length">
              <span v-for="(keyword, index2) in member.keywords" :key="`${index}-${index2}`">
                {{ keyword }}
              </span>
            </div>
          </div>
          <h3>
              <small>{{ displayByLocale(member.role) }}</small>
              <span>{{ displayByLocale(member.name) }}</span>
          </h3>
          <p>
            {{ displayByLocale(member.location) }}<br />
            {{ displayByLocale(member.description) }}
          </p>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    members() {
      return this.$store.getters.getMembers;
    }
  }
};
</script>
