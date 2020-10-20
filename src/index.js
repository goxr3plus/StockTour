import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { BrowserRouter } from 'react-router-dom';

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={getBasename()}>
      <App />
      {/*<ReduxToastr timeOut={4000} newestOnTop={false} position="top-left" progressBar closeOnToastrClick />*/}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

//stock api key = BYEXYBRG4D1OVIC2
