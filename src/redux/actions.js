export const setArticles = articles => {
  return {
    type: 'ARTICLES',
    payload: articles,
  };
};

export const setArticle = article => {
  return {
    type: 'ARTICLE',
    payload: article,
  };
};

export const setLogOut = () => {
  return {
    type: 'LOGOUT'
  };
};

export const setUserImg = img => {
  return {
    type: 'SETIMG',
    payload: img
  };
};

export const setSignIn = user => {
  return {
    type: 'SIGNIN',
    payload: user
  };
};

// export const setSortFlag = (flag) => {
//   return {
//     type: 'SORT',
//     payload: flag,
//   };
// };

// export const setFilterList = (list) => {
//   return {
//     type: 'FILTER',
//     payload: list,
//   };
// };

// export const setSlice = (sliced) => {
//   return {
//     type: 'SLICED',
//     payload: sliced,
//   };
// };

// export const setTicketsFlag = (ticketsFlag) => {
//   return {
//     type: 'TICKETS_FLAG',
//     payload: ticketsFlag,
//   };
// };