import type { FallbackProps } from 'react-error-boundary';
import { Alert, AlertTitle, Button, Box } from '@mui/material';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={resetErrorBoundary}>
            Retry
          </Button>
        }
      >
        <AlertTitle>Something went wrong.</AlertTitle>
        <pre>{error.message}</pre>
      </Alert>
    </Box>
  );
};

export default ErrorFallback;
