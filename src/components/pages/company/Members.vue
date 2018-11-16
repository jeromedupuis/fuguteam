<template>
  <div class="box box--wrapper">
    <div class="box-title">
      <h2>MEMBERS</h2>
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
              <small>{{ member.role}}</small>
              <span>{{ member.name }}</span>
          </h3>
          <p>
            {{ member.location }}<br />
            {{ member.description }}
          </p>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          name: 'Jerome Dupuis',
          role: '代表取締役',
          work: 'フロントエンドエンジニア',
          img: './static/img/members/jerome.jpg',
          location: 'フランス国籍、ベルギー出身、東京都在住。',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
          keywords: ['word1', 'word2', 'word3', 'word4', 'word5']
        },
        {
          name: '美咲秋元',
          role: '代表取締役',
          work: 'プロジェクトマネジメント、マーケティング',
          img: './static/img/members/akimoto.jpg',
          location: '神奈川県出身、東京都在住。',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
          keywords: ['word1', 'word2', 'word3', 'word4', 'word5']
        }
      ]
    };
  }
};
</script>
