import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import dashBoard from '../pages/dashboard/reducer';
import thunk from 'redux-thunk';
import { reducer as toastr } from 'react-redux-toastr';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  combineReducers({
    dashBoard,
    toastr,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

