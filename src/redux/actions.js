export const setArticles = (articles) => {
  return {
    type: 'ARTICLES',
    payload: articles,
  };
};

export const setArticle = (article) => {
  return {
    type: 'ARTICLE',
    payload: article,
  };
};

export const setLogOut = () => {
  return {
    type: 'LOGOUT',
  };
};

export const setUserImg = (img) => {
  return {
    type: 'SETIMG',
    payload: img,
  };
};

export const setSignIn = (user) => {
  return {
    type: 'SIGNIN',
    payload: user,
  };
};
