const state = {
  list: [
    // {
    //   title: 'Sample',
    //   img: 'projects/sample.jpg',
    //   date: '2018-10-10',
    //   description: {
    //     ja: 'サンプル',
    //     fr: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    //     en: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    //   },
    //   index: true
    // }
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
