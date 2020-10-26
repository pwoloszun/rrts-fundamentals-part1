import { useState } from 'react';

type UsePreviousResult<T> = [T, T | undefined, (nextValue: T) => void];

function usePrevious<T>(initialValue: T): UsePreviousResult<T> {
  // TODO

  return [initialValue, undefined, (nextValue: T) => { }];
}

export default usePrevious;
