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
    showActions: true,
  },
};

const initialState = {
  portfolio: '3325',
  stocks: [
    { symbol: 'Nio', description: 'NIO Holdings', livePrice: '30' },
    { symbol: 'SPCE', description: 'Virgin Galactic', livePrice: '24' },
    { symbol: 'TSLA', description: 'Tesla', livePrice: '457' },
    { symbol: 'MGI', description: 'MoneyGram', livePrice: '5' },
  ],

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
    case ActionTypes.UPDATE_BOUGHT_STOCKS_TABLE:
      const tableData = data.data;
      return { ...state, table: { ...table, data: tableData, totalDataSize: tableData.length } };
    default:
      return state;
  }
};

export default reducer;
