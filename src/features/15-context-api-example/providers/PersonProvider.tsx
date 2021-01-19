import React, { createContext, useContext } from 'react';

import usePerson, { UsePersonResult, Person } from '../hooks/usePerson';

const PersonContext = createContext<UsePersonResult | null>(null);

interface Props {
  value: Person;
}

export default function TodosProvider(props: React.PropsWithChildren<Props>) {
  const personService = usePerson(props.value);

  return (
    <PersonContext.Provider value={personService}>
      {props.children}
    </PersonContext.Provider>
  );
}

export const usePersonContext = () => {
  const personContext = useContext(PersonContext);
  if (!personContext) {
    throw new Error(`Undefined personContext`);
  }
  return personContext;
};


