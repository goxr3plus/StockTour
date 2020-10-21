import * as ActionTypes from './actions';

const table = {
  table: {
    data: [],
    totalDataSize: 0,
    expandedRows: {},
  },
};

const tableFilter = {
  tableFilters: {
    paginationLimit: 10,
    paginationPage: 0,
    sortOrder: 'asc',
    sortColumn: '',
    showPagination: true,
    showSort: true,
    // expandable: true
  },
};

const initialState = {
  nio: '15',

  //---- Table ----
  ...table,

  //----Table Filters ----
  ...tableFilter,
};


const reducer = (state = initialState, action) => {
  const data = action.data;
  switch (action.type) {
    case ActionTypes.DASHBOARD_UPDATE_STORE:
      return { ...state, ...data };
    default:
      return state;
  }
};

export default reducer;
