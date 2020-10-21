import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from 'components/Page';
import { NumberWidget } from 'components/Widget';
import { Col, Row } from 'reactstrap';
import { UserCard } from '../../components/Card';
import { AdvancedTable } from '../../components/index';
import StockTableMeta from './StockTableMeta';
import { getStockData } from './actions';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import FlipNumbers from 'react-flip-numbers';
import { convertToCurrency } from '../../utils/helper';

const DashboardPage = () => {

  const dispatch = useDispatch();
  const { stocks, portfolio, table, expandCollapse, tableFilters } = useSelector((state) => state['dashBoard']);


  /* This is the same as component did mount */
  useEffect(() => {
    dispatch(getStockData());
  }, []);

  //--------------------------------- ACTIONS ---------------------------------------- //

  // -------------------------- TABLE --------------------------------------

  const getTable = (table) => {
    return (
      <Row style={{ marginBottom: '10px' }}>
        <Col md={12}>
          <AdvancedTable
            meta={StockTableMeta}
            table={table}
            onPageChange={onPageChange}
            onLimitChange={onLimitChange}
            onSortChange={onSortChange}
            renderRowActions={renderRowActions}
            // renderExpandedRow={renderExpandedRow}
            // expandCollapse={expandCollapse}
            renderHeader={renderHeader}
            renderColumn={renderColumn}
            filterLimitStyle={{ marginTop: '2px' }}
            {...tableFilters}
          />
        </Col>
      </Row>
    );
  };

  const fetchTableData = () => {
  };

  const onPageChange = async (paginationPage) => {
  };

  const onLimitChange = async (paginationLimit) => {
  };

  const onSortChange = async (newSort) => {
  };

  const renderRowActions = (record) => {
    return (
      <Row style={{ margin: '0px', padding: '0px' }}>
        <Col xs={6} style={{ margin: '0px', padding: '0px', cursor: 'pointer' }}><FaEdit size="25px" /></Col>
        <Col xs={6} style={{ margin: '0px', padding: '0px', cursor: 'pointer' }}><FaWindowClose size="25px"
                                                                                                color="firebrick" /></Col>
      </Row>
    );
  };

  const renderExpandedRow = (rowItem) => {
    return <Row></Row>;
  };

  const renderHeader = (column) => {
  };

  const renderColumn = (record, column) => {
    if (column.id == 'boughtPrice') {
      return convertToCurrency(record.boughtPrice);

    } else if (column.id == 'invested') {
      return convertToCurrency(record.boughtPrice * record.amount);

    } else if (column.id == 'profit') {
      const stockLivePrice = getStockPrice(record.symbol);
      const moneyNow = stockLivePrice * record.amount;
      const moneyBefore = record.boughtPrice * record.amount;
      const profit = moneyNow - moneyBefore;
      return <strong style={{ color: profit > 0 ? 'green' : 'firebrick' }}>{convertToCurrency(profit)}</strong>;

      // } else if (column.id == 'profitPercent') {
      //   const stockLivePrice = getStockPrice('NIO');
      //   const moneyNow = stockLivePrice * record.amount;
      //   const moneyBefore = record.boughtPrice * record.amount;
      //   const profitPercent = moneyNow * 100 / moneyBefore - 100;
      //
      //   return profitPercent.toFixed(2) + '%';

    } else if (column.id == 'moneyNow') {
      const stockLivePrice = getStockPrice(record.symbol);
      const moneyNow = stockLivePrice * record.amount;
      const moneyBefore = record.boughtPrice * record.amount;
      const profit = moneyNow - moneyBefore;
      return <strong style={{ color: profit > 0 ? 'green' : 'firebrick' }}>{convertToCurrency(moneyNow)}</strong>;
    }


  };


  //--------------------------------- GETTERS ---------------------------------------- //

  const getStockPrice = (symbol) => {
    const results = stocks.filter(stock => stock.symbol == symbol);
    if (results.length == 0) {
      return 0;
    } else return results[0].livePrice;
  };

  const getPortfolioProfit = () => {

    return convertToCurrency(50);
  };
  // -------------------------- RENDER ---------------------------------------

  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'Dashboard', active: true }]}
    >
      <Row>
        <Col md={12}>
          <UserCard
            title="Alex PORTFOLIO"
            subtitle={convertToCurrency(portfolio)}
            text={50}
            style={{
              height: 120,
            }}
          />
        </Col>
      </Row>
      <Row>
        {stocks.map((stock, index) =>
          <Col lg={3} md={6} sm={6} xs={12} key={`Stock_${index}`}>
            <NumberWidget
              title={stock.symbol}
              subtitle={stock.description}
              number={`${stock.livePrice} $`}
            />
          </Col>,
        )}
      </Row>
      <Row style={{ marginTop: '10px' }}>
        <Col xs={12} md={12}>
          {getTable(table)}
        </Col>
      </Row>
    </Page>
  )
    ;
};

export default DashboardPage;
