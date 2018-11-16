const state = {
  list: [
    {
      name: 'Sample',
      img: 'clients/sample.svg'
    },
    {
      name: 'Sample',
      img: 'clients/sample.svg'
    },
    {
      name: 'Sample',
      img: 'clients/sample.svg'
    },{
      name: 'Sample',
      img: 'clients/sample.svg'
    },
    {},
    {
      name: 'Sample',
      img: 'clients/sample.svg'
    },
    {
      name: 'Sample',
      img: 'clients/sample.svg'
    },
    {}
  ]
};
const getters = {
  getClients: state => {
    return state.list;
  }
};

export default {
  state,
  getters
};
