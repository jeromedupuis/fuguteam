const state = {
  list: [
    {
      name: 'Jerome Dupuis',
      role: {
        ja: '代表取締役',
        en: 'CEO',
        fr: 'CEO'
      },
      work: {
        ja: 'フロントエンドエンジニア',
        en: 'Front End Engineer',
        fr: 'Front End Engineer'
      },
      img: './static/img/members/jerome.jpg',
      location: {
        ja: 'フランス国籍、ベルギー出身、東京都在住。',
        en: 'French, from Belgium, currently in Tokyo',
        fr: 'Français de Belgique, vivant actuellement à Tokyo',
      },
      description: {
        ja: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト。サンプルテキストサンプルテキストサンプルテキストサンプルテキスト。サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト。サンプルテキスト。',
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      },
      keywords: ['word1', 'word2', 'word3', 'word4', 'word5']
    },
    {
      name: 'Misaki Akimoto',
      role: {
        ja: '代表取締役',
        en: 'CEO',
        fr: 'CEO'
      },
      work: {
        ja: 'プロジェクトマネジメント、マーケティング',
        en: 'Project Manager, marketing',
        fr: 'Chargée de projet, marketing'
      },
      img: './static/img/members/akimoto.jpg',
      location: {
        ja: '神奈川県出身、東京都在住。',
        en: 'From Kanagawa, Japan. Currently in Tokyo。',
        fr: 'De Kanagawa, Japon. Actuellement à Tokyo',
      },
      description: {
        ja: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト。サンプルテキストサンプルテキストサンプルテキストサンプルテキスト。サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト。サンプルテキスト。',
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        fr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      },
      keywords: ['word1', 'word2', 'word3', 'word4', 'word5']
    }
  ]
};
const getters = {
  getMembers: state => {
    return state.list;
  }
};

export default {
  state,
  getters
};
