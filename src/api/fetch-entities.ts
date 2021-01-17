import axios from 'axios';

import { delayedValue } from 'src/utils/randoms';

import BASE_URL from './base-url';

export default function fetchEntities<T>(path: string): Promise<T[]> {
  const url = BASE_URL + path;

  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .then((entities) => {
      return delayedValue(entities, 1200);
    });
}
