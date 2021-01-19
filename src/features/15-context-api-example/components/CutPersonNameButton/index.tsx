import { slice } from 'lodash';
import React, { useCallback } from 'react';

import { usePersonContext } from '../../providers/PersonProvider';

export default function CutPersonNameButton() {
  const { person, setLastName } = usePersonContext();

  const cutNameHandler = useCallback(() => {
    const nextLastName = person.lastName.slice(0, -1);
    setLastName(nextLastName);
  }, [person, setLastName]);

  return (
    <button onClick={cutNameHandler}>Cut Last Name</button>
  );
}
