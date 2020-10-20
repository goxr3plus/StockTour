import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import dashBoard from '../pages/dashboard/reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  combineReducers({
    dashBoard: dashBoard,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

