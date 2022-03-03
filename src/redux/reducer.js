const initialState = {
  articles: [],
  articlesCount: 0,
  article: {},
  auth: false,
  username: '',
  image: '',
  token:'',
  email: ''
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
          username: '',
      };
    case 'SIGNIN':
      return {
        ...state,
        auth: true,
          username: payload.username,
          token: payload.token,
          email: payload.email,
      };
    case 'SETIMG':
      return {
        ...state,
        image: payload,
      };

    default:
      return state;
  }
};

export default reducer;