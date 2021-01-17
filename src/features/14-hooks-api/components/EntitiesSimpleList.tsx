import React from 'react';

interface Props {
  entites: any[];
  isLoading: boolean;
  error: Error | null;
  renderValue: string;
}

export default function EntitiesSimpleList(props: Props) {
  const { entites, isLoading, error, renderValue } = props;
  let content = null;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Error {error.message}</p>;
  } else if (entites) {
    content = (
      <ul>
        {
          entites.map((entity) => {
            const { id } = entity;
            const value = entity[renderValue];
            return (
              <li key={id}>
                {value}
              </li>
            );
          })
        }
      </ul>
    );
  }

  return content;
}
