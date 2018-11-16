const state = {
  list: [
    // {
    //   id: 1,
    //   slug: 'this-is-a-sample-title',
    //   title: 'This is a sample title',
    //   description: 'this is a sample description this is a sample description this is a sample description this is a sample description',
    //   date: '2019-01-01',
    //   body: '20190101'
    // }
  ]
};
const getters = {
  getNews: state => {
    return state.list;
  },
  getOneNew: state => {
    return (params) => {
      const { id, date, slug } = params;
      return state.list.find((x) => {
        return (x.id === id && x.date === date && x.slug === slug);
      });
    };
  }
};

export default {
  state,
  getters
};
