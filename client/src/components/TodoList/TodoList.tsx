import { useQuery } from 'react-query';
import { getAllTodos } from 'api/todos';
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Tooltip
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteTodo from 'components/DeleteTodo';

const TodoList = () => {
  const { data } = useQuery('todos', getAllTodos);

  const handleEdit = (id: number) => {};

  return (
    <List>
      {data?.map((todo: any) => (
        <ListItem key={todo.todo_id}>
          <ListItemText primary={todo.description} />
          <ListItemSecondaryAction>
            <Tooltip title="Edit">
              <IconButton
                aria-label="edit"
                onClick={() => handleEdit(todo.todo_id)}
              >
                <CreateIcon />
              </IconButton>
            </Tooltip>
            <DeleteTodo itemId={todo.todo_id} />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
