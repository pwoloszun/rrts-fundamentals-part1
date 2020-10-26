import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './index';

describe('Dashboard', () => {

  it('renders without crashing', () => {
    expect(() => {
      render(<Dashboard/>);
    }).not.toThrowError();
  });

});
