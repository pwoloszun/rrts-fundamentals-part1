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
  const [present, setPresent] = useState(initialValue);
  const [past, setPast] = useState<T[]>([]);
  const [future, setFuture] = useState<T[]>([]);

  const canUndo = past.length > 0;
  const canRedo = future.length > 0;

  const setValue = (nextValue: T) => {
    setPast([...past, present]);
    setFuture([]);
    setPresent(nextValue);
  };

  const undo = () => {
    if (canUndo) {
      const previous = last(past);
      setPast(past.slice(0, past.length - 1));
      setFuture([present, ...future]);
      setPresent(previous as T);
    }
  };

  const redo = () => {
    if (canRedo) {
      const next = first(future);
      setPast([...past, present]);
      setFuture(future.slice(1));
      setPresent(next as T);
    }
  };

  return {
    value: present,
    setValue,
    past,
    future,
    undo,
    redo,
    canUndo,
    canRedo,
  };
}
