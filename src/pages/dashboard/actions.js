import { dispatchAction, handleError } from '../../store/commonActions';
import { sleep } from '../../utils/helper';
import axios from 'axios';


// ================================ ACTIONS ===============================================

export const DASHBOARD_UPDATE_STORE = 'DASHBOARD_UPDATE_STORE';
export const UPDATE_BOUGHT_STOCKS_TABLE = 'UPDATE_BOUGHT_STOCKS_TABLE';

// ================================ METHODS ================================

const createMockData = (id, symbol, boughtPrice, amount) => ({ id, symbol, boughtPrice, amount });

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


export const getStockData = () => async (dispatch, getState) => {
    try {
      /* Get Remote data */
      // const alpha = require('alphavantage')({ key: 'BYEXYBRG4D1OVIC2' });
      // const nioPrice = await alpha.data.intraday(`nio`);

      // const data = await axios.get('https://finance.yahoo.com/quote/%5EIXIC?p=^IXIC');
      //  console.log(data.data);

      dispatchAction(UPDATE_BOUGHT_STOCKS_TABLE, {
        data: [
          createMockData(1, 'NIO', 23.70, 40),
          createMockData(2, 'MGI', 4.50, 400),
          createMockData(3, 'TSLA', 432, 12),
          createMockData(4, 'SPCE', 21.70, 7),
        ],

      }, dispatch);

      for (let step = 0; step < 150; step++) {
        await sleep(1500);
        dispatchAction(DASHBOARD_UPDATE_STORE, {
          stocks: [
            { symbol: 'NIO', description: 'NIO Holdings', livePrice: randomNumber(20, 30) },
            { symbol: 'SPCE', description: 'Virgin Galactic', livePrice: randomNumber(20, 24) },
            { symbol: 'TSLA', description: 'Tesla', livePrice: randomNumber(400, 432) },
            { symbol: 'MGI', description: 'MoneyGram', livePrice: randomNumber(1, 5) },
          ],
        }, dispatch);
      }

    } catch (error) {
      console.log('error', error);
      return handleError(error, DASHBOARD_UPDATE_STORE, { filtersLoading: false }, dispatch);
    }

  }
;
