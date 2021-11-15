import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarKey, SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';
import CssBaseline from '@mui/material/CssBaseline';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingProvider } from './context/LoadingProvider';

const theme = createTheme({});
const queryClient = new QueryClient();

const notistackRef: any = React.createRef();
const onClickDismiss = (key: SnackbarKey) => () => {
  notistackRef.current.closeSnackbar(key);
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoadingProvider>
        <QueryClientProvider client={queryClient}>
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
            <App />
          </SnackbarProvider>
        </QueryClientProvider>
      </LoadingProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
