import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getAllTodos, deleteTodo } from 'api/todos';
import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack';

const TodoList = () => {
  const { data } = useQuery('todos', getAllTodos);
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const { mutateAsync } = useMutation(deleteTodo, {
    onSuccess: (res) => {
      queryClient.invalidateQueries('todos');
      enqueueSnackbar('Successfully removed Todo', { variant: 'success' });
    },
    onError: () => {
      enqueueSnackbar('Something went wrong.', { variant: 'error' });
    }
  });

  const handleDelete = async (id: number) => {
    await mutateAsync({ id });
  };

  return (
    <List>
      {data?.map((todo: any) => (
        <ListItem
          key={todo.todo_id}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDelete(todo.todo_id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={todo.description} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
