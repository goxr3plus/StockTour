// ================================ ACTIONS ===============================================

export const DASHBOARD_UPDATE_STORE = 'DASHBOARD_UPDATE_STORE';


// ================================ METHODS ================================

export const getStockData = () => async (dispatch) => {
  try {
    // dispatchAction(DASHBOARD_UPDATE_STORE, { filtersLoading: true, loading: translate('rsLoading') }, dispatch)

    console.log('hello');

    // dispatchAction(DASHBOARD_UPDATE_STORE, { games, types, filtersLoading: false }, dispatch)
  } catch (error) {
    console.log('error');
    // return handleError(error, DASHBOARD_UPDATE_STORE, { filtersLoading: false }, dispatch)
  }
};
