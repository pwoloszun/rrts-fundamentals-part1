import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export default class AdvancedValidation extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="BasicFormExample">
        <Tab eventKey="BasicFormExample" title="BasicFormExample">
          TODO 1
        </Tab>
        <Tab eventKey="MultiErrorExample" title="MultiErrorExample">
          TODO 1
        </Tab>
      </Tabs>
    );
  }
}
