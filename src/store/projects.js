const state = {
  list: [
    {
      title: 'Sample',
      img: 'projects/sample.png',
      date: '2018-10-10',
      description: {
        ja: 'サンプル',
        fr: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        en: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
      },
      index: true
    },
    {
      title: 'TA2MI',
      img: 'projects/ta2mi.png',
      date: '2018-02-10',
      description: {
        ja: 'TA2MI : Monk DJ & Beatboxer',
        fr: 'TA2MI : Monk DJ & Beatboxer',
        en: 'TA2MI : Monk DJ & Beatboxer'
      },
      index: true
    }
  ]
};
const getters = {
  getProjects: state => {
    return state.list;
  }
};

export default {
  state,
  getters
};
