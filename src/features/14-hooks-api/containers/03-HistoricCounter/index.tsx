import React, { useState } from 'react';

import Counter from '../../../../components/Counter';

// TODO: refactor
// import usePrevious from '../../hooks/usePrevious';

const initialValue = 0;

export default function HistoricCounter() {
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [currentValue, setCurrentValue] = useState(initialValue);

  const incrementHandler = () => {
    setPreviousValue(currentValue);
    setCurrentValue(currentValue + 10);
  };
  const decrementHandler = () => {
    setPreviousValue(currentValue);
    setCurrentValue(currentValue - 10);
  };

  return (
    <div>
      <h3>HistoricCounter</h3>
      <h5>Previous Value: {previousValue} </h5>
      <div>
        <Counter value={currentValue}
          onIncrement={incrementHandler}
          onDecrement={decrementHandler}
        />
      </div>
    </div>
  );
}
