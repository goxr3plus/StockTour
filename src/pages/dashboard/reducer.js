import * as ActionTypes from './actions';

const initialState = {
  nio: '15',
};


const reducer = (state = initialState, action) => {
  const data = action.data;
  switch (action.type) {
    case ActionTypes.DASHBOARD_UPDATE_STORE:
      return [...state, action.data];
    default:
      return state;
  }
};

export default reducer;
