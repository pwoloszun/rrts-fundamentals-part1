import { useState } from 'react';

interface IdsToBoolMap {
  [id: string]: boolean;
}

interface UseWaitResult {
  isWaiting: (id: string) => boolean;
  startWaiting: (id: string) => void;
  endWaiting: (id: string) => void;
};

function useWait(): UseWaitResult {
  const [waitingMap, setWaitingMap] = useState<IdsToBoolMap>({});

  const isWaiting = (id: string): boolean => {
    return !!waitingMap[id];
  };

  const setWaitingFor = (id: string, value: boolean) => {
    setWaitingMap({
      ...waitingMap,
      [id]: value,
    });
  };

  const startWaiting = (id: string) => {
    setWaitingFor(id, true);
  };

  const endWaiting = (id: string) => {
    setWaitingFor(id, false);
  };

  return {
    isWaiting,
    startWaiting,
    endWaiting,
  };
}

export default useWait;
