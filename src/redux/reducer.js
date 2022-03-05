const initialState = {
  articles: [],
  articlesCount: 0,
  article: JSON.parse(localStorage.getItem('article'))?.article || {},
  auth: localStorage.getItem('auth') || '',
  username: localStorage.getItem('username') || '',
  image: localStorage.getItem('image') || '',
  token: localStorage.getItem('token') || '',
  email: localStorage.getItem('email') || '',
};

const reducer = (state = initialState, { payload, type }) => {
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
        article: payload.article,
      };
    case 'LOGOUT':
      return {
        ...state,
        auth: false,
        image: '',
        email: '',
        username: '',
        token: '',
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
