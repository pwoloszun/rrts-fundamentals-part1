import React, { useState, useEffect } from 'react';

import fetchRealEstates, { RealEstate } from 'src/api/fetch-real-estates';

import EntitiesSimpleList from '../../components/EntitiesSimpleList';

export default function MyDashboard() {
  const [realEstates, setRealEstates] = useState<RealEstate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const requestPromise = fetchRealEstates();

    setIsLoading(true);
    requestPromise
      .then((realEstates) => {
        // throw new Error('oh my!');
        setRealEstates(realEstates);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // TODO
  // const [
  //   realEstates,
  //   isRealEstatesLoading,
  //   realEstatesError
  // ] = useAsync(fetchRealEstates);

  // const [
  //   users,
  //   isUsersLoading,
  //   usersError
  // ] = useAsync(fetchUsers);



  return (
    <div>
      <h3>MyDashboard</h3>
      <EntitiesSimpleList
        entites={realEstates}
        isLoading={isLoading}
        error={error}
        renderValue="street"
      />
      <hr />
      {/* <EntitiesSimpleList
        entites={users}
        isLoading={isUsersLoading}
        error={usersError}
        renderValue="email"
      /> */}
    </div>
  );
}
