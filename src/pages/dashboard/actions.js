import { dispatchAction, handleError } from '../../store/commonActions';
import { sleep } from '../../utils/helper';
import axios from 'axios';


// ================================ ACTIONS ===============================================

export const DASHBOARD_UPDATE_STORE = 'DASHBOARD_UPDATE_STORE';
export const UPDATE_BOUGHT_STOCKS_TABLE = 'UPDATE_BOUGHT_STOCKS_TABLE';

// ================================ METHODS ================================

const createMockData = (id, symbol, boughtPrice, amount) => ({ id, symbol, boughtPrice, amount });

const randomNumber = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

export const getStockData = () => async (dispatch, getState) => {
    try {
      /* Get Remote data */
      // const alpha = require('alphavantage')({ key: 'BYEXYBRG4D1OVIC2' });
      // const nioPrice = await alpha.data.intraday(`nio`);

      // const data = await axios.get('https://finance.yahoo.com/quote/%5EIXIC?p=^IXIC');
      //  console.log(data.data);

      dispatchAction(UPDATE_BOUGHT_STOCKS_TABLE, {
        data: [
          createMockData(1, 'NIO', 27.50, 120),
          createMockData(2, 'SPCE', 21.70, 7),
          // createMockData(3, 'MGI', 5, 400),
          // createMockData(4, 'TSLA', 425, 4),

        ],

      }, dispatch);

      for (let step = 0; step < 150; step++) {
        await sleep(1500);
        dispatchAction(DASHBOARD_UPDATE_STORE, {
          stocks: [
            { symbol: 'NIO', description: 'NIO Holdings', livePrice: randomNumber(27.20, 28.40) },
            { symbol: 'SPCE', description: 'Virgin Galactic', livePrice: randomNumber(22, 23) },
            { symbol: 'MGI', description: 'MoneyGram', livePrice: randomNumber(4.8, 5.50) },
            { symbol: 'TSLA', description: 'Tesla', livePrice: randomNumber(417, 432) },
          ],
        }, dispatch);
      }

    } catch (error) {
      console.log('error', error);
      return handleError(error, DASHBOARD_UPDATE_STORE, { filtersLoading: false }, dispatch);
    }

  }
;
