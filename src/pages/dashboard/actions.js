import { dispatchAction, handleError } from '../../store/commonActions';
import { sleep } from '../../utils/helper';
import axios from 'axios';


// ================================ ACTIONS ===============================================

export const DASHBOARD_UPDATE_STORE = 'DASHBOARD_UPDATE_STORE';
export const UPDATE_STOCKS_TABLE = 'UPDATE_STOCKS_TABLE';

// ================================ METHODS ================================

const createMockData = (id, stock, buyPrice, profit) => {
  return { id, stock, buyPrice, profit };
};

export const getStockData = () => async (dispatch) => {
  try {
    console.log('Getting Stock Data');

    // await sleep(1500);

    /* Get Remote data */
    // const alpha = require('alphavantage')({ key: 'BYEXYBRG4D1OVIC2' });
    // const nioPrice = await alpha.data.intraday(`nio`);

    // const data = await axios.get('https://finance.yahoo.com/quote/%5EIXIC?p=^IXIC');
    //  console.log(data.data);


    dispatchAction(UPDATE_STOCKS_TABLE, {
      data: [
        createMockData(1, 'NIO', '28.50$', '+5%'),
        createMockData(1, 'NIO', '28.50$', '+5%'),
        createMockData(1, 'NIO', '28.50$', '+5%'),
        createMockData(1, 'NIO', '28.50$', '+5%'),
      ],

    }, dispatch);
  } catch (error) {
    console.log('error', error);
    return handleError(error, DASHBOARD_UPDATE_STORE, { filtersLoading: false }, dispatch);
  }

};
