const state = {
  list: [
    {
      title: 'Sample',
      img: 'projects/sample.jpg',
      date: '2018-10-10',
      description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      index: true
    },
    {
      title: 'Sample',
      img: 'projects/sample.jpg',
      date: '2018-10-10',
      description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      index: true
    },
    {
      title: 'Sample',
      img: 'projects/sample.jpg',
      date: '2018-10-10',
      description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      index: true
    },{
      title: 'Sample',
      img: 'projects/sample.jpg',
      date: '2018-10-10',
      description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
    {
      title: 'Sample',
      img: 'projects/sample.jpg',
      date: '2018-10-10',
      description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
    {
      title: 'Sample',
      img: 'projects/sample.jpg',
      date: '2018-10-10',
      description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
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
