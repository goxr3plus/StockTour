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
      name: 'Stock',
      id: 'stock',
      translation: 'rsStock',
      ...columnStyle,
    },
    {
      name: 'Buy Price',
      id: 'buyPrice',
      translation: 'rsBuyPrice',
      ...columnStyle,
    },
    {
      name: 'Profit',
      id: 'profit',
      translation: 'rsProfit',
      ...columnStyle,
    },
    // {
    //   name: 'Actions',
    //   id: 'actions',
    //   translation: 'rsActions',
    //   ...columnStyle,
    // },

  ],
};

export default StockTableMeta;
