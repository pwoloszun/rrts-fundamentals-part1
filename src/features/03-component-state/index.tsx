import React from 'react';

import Randomizer from './components/Randomizer';
import Clock from './components/Clock';
import MyToggleText from './components/MyToggleText';

export default function ComponentState() {
  return (
    <div>
      <h3>Component State</h3>
      <Randomizer delay={2200} max={50}/>
      <Clock/>
      <MyToggleText/>
    </div>
  );
}
