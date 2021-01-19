import React from 'react';

import { usePersonContext } from '../../providers/PersonProvider';

export default function DisplayPerson() {
  const { person } = usePersonContext();
  const personJson = JSON.stringify(person, null, 2);
  return (
    <div>
      <h3>LastName length: {person.lastName.length}</h3>
      <pre>
        {personJson}
      </pre>
    </div>
  );
}
