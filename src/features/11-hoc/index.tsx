import React from 'react';

import TriangleLog from './containers/TriangleLog';
import RectangleLog from './containers/RectangleLog'
import TriangleConnected from './containers/TriangleConnected'

const onDrawHandler = () => {
  console.log('withLog: onDrawHandler', Math.random());
}

export default function HigherOrdrComponentsExamples() {
  return (
    <div>
      <h3>HigherOrdrComponentsExamples</h3>
      <div>
        <h5>with logger</h5>
        <TriangleLog a={12} h={3} onDraw={onDrawHandler} />
        <RectangleLog a={6} />
      </div>
      <div>
        <h5>my connected</h5>
        <TriangleConnected />
      </div>
    </div>
  );
}
