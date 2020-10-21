const TABLE_MAX_HEADERS_WIDTH_PERCENTAGE = 90;
const GRID_ENTRIES_TO_SHOW = 2;
const tableHeaderWidthPercent = `${TABLE_MAX_HEADERS_WIDTH_PERCENTAGE / GRID_ENTRIES_TO_SHOW}%`;

const columnStyle = {
  tableHeaderWidth: tableHeaderWidthPercent,
  tableHeaderStyle: { textAlign: 'center' },
  tableColumnStyle: { textAlign: 'center' },
};

const StockTableMeta = {
  PK: () => 'id',

  tableColumns: () => [
    {
      name: 'Id',
      id: 'id',
      translation: 'rsId',
      ...columnStyle,
    },
    {
      name: 'Symbol',
      id: 'symbol',
      translation: 'rsSymbol',
      ...columnStyle,
    },
    {
      name: 'Bought Price',
      id: 'boughtPrice',
      translation: 'rsBoughtPrice',
      ...columnStyle,
      isCustomColumn: true,
    },
    {
      name: 'Stocks Bought',
      id: 'amount',
      translation: 'rsStockAmount',
      ...columnStyle,
    },
    {
      name: 'Money Invested',
      id: 'invested',
      translation: 'rsMoneySpend',
      ...columnStyle,
      isCustomColumn: true,
    },
    {
      name: 'Money Now',
      id: 'moneyNow',
      translation: 'rsMoneyNow',
      ...columnStyle,
      isCustomColumn: true,
    },
    {
      name: 'Profit',
      id: 'profit',
      translation: 'rsProfit',
      ...columnStyle,
      isCustomColumn: true,
      tableColumnStyle: { textAlign: 'right' },
    },
  ],
};

export default StockTableMeta;
