import { useState, useContext, createContext } from 'react';
import type { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

interface LoadingContextProps {
  isLoading: boolean;
  toggleLoading?: () => void;
}

const defaultState = {
  isLoading: false
};

const LoadingContext = createContext<LoadingContextProps>(defaultState);

export const LoadingProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(defaultState.isLoading);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <LoadingContext.Provider
        value={{
          isLoading,
          toggleLoading
        }}
      >
        {children}
      </LoadingContext.Provider>

      {isLoading && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export const useLoadingContext = () => useContext(LoadingContext);
