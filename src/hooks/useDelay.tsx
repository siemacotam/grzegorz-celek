import { useEffect, useState } from 'react';

export const useDelay = (time: number) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => setReady(true), time);
    return () => {
      setReady(false);
      clearInterval(intervalId);
    };
  }, []);

  return { ready };
};
