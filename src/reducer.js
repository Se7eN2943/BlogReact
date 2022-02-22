const initialState = {
  searchId: '',
  tickets: [],
  ticketsFlag: false,
  filterList: ['Без пересадок'],
  sortFlag: 'discount',
  sliced: 5,
};

const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case 'SEARCH_ID':
      return {
        ...state,
        searchId: payload.searchId,
      };
    case 'TICKETS':
      return {
        ...state,
        tickets: state.tickets.concat(payload.tickets),
        ticketsFlag: payload.stop,
      };
    case 'SORT':
      return {
        ...state,
        sortFlag: payload,
      };
    case 'FILTER':
      return {
        ...state,
        filterList: payload,
      };
    case 'SLICED':
      return {
        ...state,
        sliced: payload,
      };
    case 'TICKETS_FLAG':
      return {
        ...state,
        ticketsFlag: payload,
      };
    default:
      return state;
  }
};

export default reducer;
