import React, { useCallback } from 'react';

import { usePersonContext } from '../../providers/PersonProvider';

export default function MutatePersonButton() {
  const { setLastName, incrementAge } = usePersonContext();

  const createHandler = useCallback(() => {
    const nextName = `Doe ${Math.random()}`;
    setLastName(nextName);
    incrementAge();
  }, [setLastName, incrementAge]);

  return (
    <button onClick={createHandler}>Randomize Person</button>
  );
}
