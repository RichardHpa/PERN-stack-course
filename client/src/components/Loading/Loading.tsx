import { Backdrop, CircularProgress } from '@mui/material';

interface LoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      {isLoading && <CircularProgress color="inherit" />}
    </Backdrop>
  );
};

export default Loading;
