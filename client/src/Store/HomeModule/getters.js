export default {
  getDataCitiesAndQuatityHotels(state) {
    return state.CitiesAndQuatityHotels.data;
  },

  getStatusCitiesAndQuatityHotels(state) {
    return state.CitiesAndQuatityHotels.status;
  },

  getDataHotels(state) {
    console.log(state.Hotels.data);
    return state.Hotels.data;
  },

  getStatusHotels(state) {
    return state.Hotels.status;
  },

  getDataCountriesAndQuatityHotels(state) {
    return state.CountriesAndQuatityHotels.data;
  },

  getStatusCountriesAndQuatityHotels(state) {
    return state.CountriesAndQuatityHotels.status;
  },
};
