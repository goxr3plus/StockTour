import Page from 'components/Page';
import { NumberWidget } from 'components/Widget';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { getColor } from 'utils/colors';


class DashboardPage extends React.Component {
  genLineData = (moreData = {}) => {
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    return {
      labels: MONTHS,
      datasets: [
        {
          label: 'NIO Progress over 12 months',
          backgroundColor: getColor('secondary'),
          borderColor: getColor('primary'),
          borderWidth: 1,
          data: [
            1, 2, 7, 12, 16, 20, 28,
          ],
          ...moreData,
        },
      ],
    };
  };

  render() {
    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Nio"
              subtitle="NIO A ADR"
              number="30$"
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
              subtitle="Virgin Galactic Holdings"
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

        <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>NIO Stock chart</CardHeader>
              <CardBody>
                <Line data={this.genLineData({ fill: false })} />
              </CardBody>
            </Card>
          </Col>
        </Row>


      </Page>
    );
  }
}

export default DashboardPage;
