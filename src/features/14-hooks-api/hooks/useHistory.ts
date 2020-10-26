import { useState } from 'react';
import { last, first } from 'lodash';

interface UseHistoryResult<T> {
  value: T;
  setValue: (nextValue: T) => void;
  past: T[];
  future: T[];
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
};

export default function useHistory<T>(initialValue: T): UseHistoryResult<T> {
  // TODO

  return {
    value: initialValue,
    setValue: (nextValue: T) => { },
    past: [],
    future: [],
    undo: () => { },
    redo: () => { },
    canUndo: false,
    canRedo: false,
  };
}
