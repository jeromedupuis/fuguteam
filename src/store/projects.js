const state = {
  list: [
    { index: true },
    {
      title: 'TA2MI',
      img: 'projects/ta2mi.png',
      date: '2018-02-10',
      description: 'TA2MI : Monk DJ & Beatboxer',
      index: true
    },
    { index: true }
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
