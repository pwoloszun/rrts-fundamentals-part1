import React from 'react';

import Clock from './components/Clock';
// import MyToggleText from './components/MyToggleText';
// import Randomizer from './components/Randomizer';

export default function ComponentState() {
  return (
    <div>
      <h3>Component State</h3>
      {/* <Randomizer delay={2200} max={50} /> */}
      <Clock />
      {/* <MyToggleText /> */}
    </div>
  );
}
