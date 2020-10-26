import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import BasicFormExample from './components/BasicFormExample';
import MultiErrorExample from './components/MultiErrorExample';
import FormikFundamentalsTask from './components/FormikFundamentalsTask';
import CheckboxFormExample from './components/CheckboxFormExample';

export default class FormikFundamentals extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="FormikFundamentalsTask">
        <Tab eventKey="FormikFundamentalsTask" title="Fundamentals Task">
          <FormikFundamentalsTask />
        </Tab>
        <Tab eventKey="BasicFormExample" title="BasicFormExample">
          <BasicFormExample />
        </Tab>
        <Tab eventKey="CheckboxFormExample" title="CheckboxFormExample">
          <CheckboxFormExample />
        </Tab>
        <Tab eventKey="MultiErrorExample" title="MultiErrorExample">
          <MultiErrorExample />
        </Tab>
      </Tabs>
    );
  }
}
