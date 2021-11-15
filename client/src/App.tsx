import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createTodo } from 'api/todos';
import Header from 'layouts/Header';
import { Container, Paper, TextField, Grid, Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import TodoList from 'components/TodoList';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';
import { useLoadingContext } from 'context/LoadingProvider';

function App() {
  const [description, setDescription] = useState('');
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const { toggleLoading } = useLoadingContext();

  const { mutate } = useMutation(createTodo, {
    onSuccess: (data) => {
      enqueueSnackbar('Success', { variant: 'success' });
      setDescription('');
    },
    onError: () => {
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    },
    onSettled: () => {
      toggleLoading(false);
      queryClient.invalidateQueries('todos');
    }
  });

  const handleType = (e: any) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    toggleLoading(true);
    mutate({ description });
  };

  return (
    <div className="App">
      <Header />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Grid container spacing={1}>
              <Grid item xs>
                <TextField
                  size="small"
                  fullWidth
                  label="Add Todo"
                  id="fullWidth"
                  value={description}
                  onChange={handleType}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
          <Paper>
            <TodoList />
          </Paper>
        </ErrorBoundary>
      </Container>
    </div>
  );
}

export default App;
