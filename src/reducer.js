const initialState = {
  articles: [],
  articlesCount: 0
};

const reducer = (state = initialState, {
  payload,
  type
}) => {
  switch (type) {
    case 'ARTICLES':
      return {
        ...state,
        articles: payload.articles,
          articlesCount: payload.articlesCount,
      };
      // case 'TICKETS':
      //   return {
      //     ...state,
      //     tickets: state.tickets.concat(payload.tickets),
      //     ticketsFlag: payload.stop,
      //   };
      // case 'SORT':
      //   return {
      //     ...state,
      //     sortFlag: payload,
      //   };
      // case 'FILTER':
      //   return {
      //     ...state,
      //     filterList: payload,
      //   };
      // case 'SLICED':
      //   return {
      //     ...state,
      //     sliced: payload,
      //   };
      // case 'TICKETS_FLAG':
      //   return {
      //     ...state,
      //     ticketsFlag: payload,
      //   };
    default:
      return state;
  }
};

export default reducer;