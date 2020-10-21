import { dispatchAction, handleError } from '../../store/commonActions';
import { sleep } from '../../utils/helper';
import axios from 'axios';


// ================================ ACTIONS ===============================================

export const DASHBOARD_UPDATE_STORE = 'DASHBOARD_UPDATE_STORE';


// ================================ METHODS ================================

export const getStockData = () => async (dispatch) => {
  try {
    console.log('Getting Stock Data');

    // await sleep(1500);

    /* Get Remote data */
    // const alpha = require('alphavantage')({ key: 'BYEXYBRG4D1OVIC2' });
    // const nioPrice = await alpha.data.intraday(`nio`);

    const data = await axios.get('https://finance.yahoo.com/quote/%5EIXIC?p=^IXIC');
     console.log(data.data);

    // const searchUrl = `https://medium.com/@xoor/whats-new-in-es2018-es9-a122b53e56a4`;
    // const response = await fetch(searchUrl);   // fetch page
    //
    // const htmlString = await response.text()
    // console.log(htmlString);

    dispatchAction(DASHBOARD_UPDATE_STORE, { nio: '5' }, dispatch);
  } catch (error) {
    console.log('error', error);
    return handleError(error, DASHBOARD_UPDATE_STORE, { filtersLoading: false }, dispatch);
  }
};
