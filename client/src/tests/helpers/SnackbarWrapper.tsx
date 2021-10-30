import { createRef } from 'react';
import { render as testingRender } from '@testing-library/react';
import { SnackbarProvider, SnackbarKey } from 'notistack';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface SnackbarProviderWrapperProps {
  children: any;
}

export const SnackbarProviderWrapper = ({
  children
}: SnackbarProviderWrapperProps) => {
  const notistackRef: any = createRef();
  const onClickDismiss = (key: SnackbarKey) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  return (
    <SnackbarProvider
      maxSnack={3}
      preventDuplicate
      ref={notistackRef}
      action={(key) => (
        <IconButton onClick={onClickDismiss(key)} color="inherit">
          <CloseIcon />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
};

const render = (component: any) => {
  return testingRender(
    <SnackbarProviderWrapper>{component}</SnackbarProviderWrapper>
  );
};

export default render;
