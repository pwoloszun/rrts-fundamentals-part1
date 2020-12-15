import React from 'react';

import QuadraticEquation from './components/QuadraticEquation';
// import StyledText from './components/StyledText';
// import InterrelatedValidations from './components/InterrelatedValidations';
import MyFormInterrelatedCtrls from './components/MyFormInterrelatedCtrls';

export default function Forms() {
  return (
    <div>
      <h3>Forms</h3>

      <QuadraticEquation />
      <hr />

      {/* <StyledText/> */}
      <hr />

      {/* <InterrelatedValidations /> */}
      <hr />

      <MyFormInterrelatedCtrls />
    </div>
  );
}
