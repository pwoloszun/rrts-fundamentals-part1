import React from 'react';
import {
  render,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MyCounter, { Props } from './index';

function renderMyCounter(props: Props) {
  return render(<MyCounter {...props} />);
}

describe('MyCounter', () => {
  describe('defined initialValue', () => {
    it('should render initial value', () => {
      const initialValue = 123;
      const { getByText } = renderMyCounter({ initialValue });
      expect(getByText(/Value/)).toHaveTextContent(`Value: ${initialValue}`);
    });

    describe('increment click', () => {
      it('should increment value', () => {
        const initialValue = 123;
        const { getByText } = renderMyCounter({ initialValue });

        userEvent.click(getByText('Increment'));

        expect(getByText(/Value/)).toHaveTextContent(`Value: ${initialValue + 1}`);
      });
    });

    describe('decrement click', () => {
      it('should decrement value', () => {
        const initialValue = 123;
        const { getByText } = renderMyCounter({ initialValue });

        userEvent.click(getByText('Decrement'));

        expect(getByText(/Value/)).toHaveTextContent(`Value: ${initialValue - 1}`);
      });
    });
  });

  describe('undefined initialValue', () => {
    it('should render default value', () => {
      const { getByText } = render(<MyCounter />);

      expect(getByText(/Value/)).toHaveTextContent(`Value: 0`);
    });
  });

});
