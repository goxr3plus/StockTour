import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from 'components/Page';
import { NumberWidget } from 'components/Widget';
import { Col, Row } from 'reactstrap';
import { UserCard } from '../../components/Card';

const DashboardPage = () => {

  const dispatch = useDispatch();
  const { nio } = useSelector((state) => state['dashBoard']);


  /* This is the same as component did mount */
  useEffect(() => {
    // console.log('hello');
    // dispatch(getStockData());
  }, []);

  //--------------------------------- ACTIONS ---------------------------------------- //


  //--------------------------------- GETTERS ---------------------------------------- //


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
    </Page>
  )
    ;
};

export default DashboardPage;
