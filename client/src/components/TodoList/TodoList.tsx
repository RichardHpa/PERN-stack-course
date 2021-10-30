import { useQuery } from 'react-query';
import { getAllTodos } from 'api/todos';
import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const { data } = useQuery('todos', getAllTodos);
  return (
    <List>
      {data?.map((todo: any) => (
        <ListItem
          key={todo.todo_id}
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
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
