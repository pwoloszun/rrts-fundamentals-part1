import { useState, useCallback } from 'react';

import DataApiService, { DataEntity } from '../../../api/data-api.service';

export interface UseFetchResult<T> {
  data: T[];
  fetchData: () => void;
  isLoading: boolean;
  error: Error | undefined;
}

function useFetch<T extends DataEntity>(
  api: DataApiService<T>,
): UseFetchResult<T> {
  const [entitiesData, setEntitiesData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const fetchData = useCallback(() => {
    setIsLoading(true);
    api.getAll()
      .then((entities) => {
        setEntitiesData(entities as T[]);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [api]);

  return {
    data: entitiesData,
    fetchData,
    isLoading,
    error
  };
}

export default useFetch;
