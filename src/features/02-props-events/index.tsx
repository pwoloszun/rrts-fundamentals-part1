import React from 'react';

import Parent from './components/Parent';
import CarConfigurator from './components/CarConfigurator';
import PropTypesExample from './components/PropTypesExample';

export default function PropsEvents() {
  return (
    <div>
      <h3>Props & Events</h3>
      <Parent/>
      <hr/>
      <CarConfigurator/>
      <hr/>
      <PropTypesExample
        requiredAny={123}
        requiredFunc={() => console.log(`qq ${Math.random()}`)}
      />
    </div>
  );
}
