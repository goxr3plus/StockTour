import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from 'components/Page';
import { NumberWidget } from 'components/Widget';
import { Col, Row } from 'reactstrap';
import { UserCard } from '../../components/Card';
import { AdvancedTable } from '../../components/index';
import StockTableMeta from './StockTableMeta';

const DashboardPage = () => {

  const dispatch = useDispatch();
  const { nio, table, expandCollapse, tableFilters } = useSelector((state) => state['dashBoard']);


  /* This is the same as component did mount */
  useEffect(() => {
    // console.log('hello');
    // dispatch(getStockData());
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
            // renderRowActions={this.renderRowActions}
            // renderExpandedRow={this.renderExpandedRow}
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
    return <Row></Row>;
  };

  const renderExpandedRow = (rowItem) => {
    return <Row></Row>;
  };

  const renderHeader = (column) => {
  };

  const renderColumn = (record, column) => {
  };


  //--------------------------------- GETTERS ---------------------------------------- //


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
            subtitle="3200$"
            style={{
              height: 120,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="Nio"
            subtitle="NIO A ADR"
            number={`${nio}$`}
            color="primary"
            // progress={{
            //   value: 75,
            //   label: 'Last month',
            // }}
          />
        </Col>
        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="SPCE"
            subtitle="Virgin Galactic"
            number="25$"
            color="primary"
          />
        </Col>
        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="TSLA"
            subtitle="Tesla"
            number="480$"
            color="secondary"
          />
        </Col>
        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="MGI"
            subtitle="MoneyGram"
            number="5$"
            color="primary"
          />
        </Col>
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
