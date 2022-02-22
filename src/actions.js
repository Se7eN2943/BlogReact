export const setSearchId = (id) => {
  return {
    type: 'SEARCH_ID',
    payload: id,
  };
};

export const setTickets = (tickets) => {
  return {
    type: 'TICKETS',
    payload: tickets,
  };
};

export const setSortFlag = (flag) => {
  return {
    type: 'SORT',
    payload: flag,
  };
};

export const setFilterList = (list) => {
  return {
    type: 'FILTER',
    payload: list,
  };
};

export const setSlice = (sliced) => {
  return {
    type: 'SLICED',
    payload: sliced,
  };
};

export const setTicketsFlag = (ticketsFlag) => {
  return {
    type: 'TICKETS_FLAG',
    payload: ticketsFlag,
  };
};
