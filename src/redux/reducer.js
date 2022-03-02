const initialState = {
  articles: [],
  articlesCount: 0,
  article: {},
  auth: true,
  username:'John Doe',
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
    case 'ARTICLE':
      return {
        ...state,
        article: payload.article
      };
      case 'LOGOUT':
        return {
          ...state,
          auth: false,
          username:'',
        };
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