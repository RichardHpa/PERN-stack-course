import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAllTodos } from '../src/api/todos';
import Header from './layouts/Header';
import { Container, Paper, TextField, Grid, Button } from '@mui/material';

function App() {
  const { data } = useQuery('todos', getAllTodos);
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  const handleType = (e: any) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    console.log(description);
  };

  return (
    <div className="App">
      <Header />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
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
      </Container>
    </div>
  );
}

export default App;
