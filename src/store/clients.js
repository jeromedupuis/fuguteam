const state = {
  list: [
    {},
    {
      name: '株式会社Hatte',
      name_en: 'Hatte inc.',
      img: 'clients/hatte-inc.png',
      invert: true
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
