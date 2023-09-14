import { AppContext } from 'context/AppContext';
import { useContext } from 'react';

export const useAppContext = (): AppContext => {
  const context = useContext(AppContext);

  return context;
};
