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
  // TODO

  return {
    data: [],
    fetchData: () => { },
    isLoading: true,
    error: undefined,
  };
}

export default useFetch;
