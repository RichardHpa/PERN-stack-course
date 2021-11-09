import { useQuery } from 'react-query';
import { getAllTodos } from 'api/todos';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@mui/material';
import DeleteTodo from 'components/DeleteTodo';
import EditTodo from 'components/EditTodo';

const TodoList = () => {
  const { data } = useQuery('todos', getAllTodos);

  return (
    <List>
      {data?.map((todo: { todo_id: number; description: string }) => {
        return (
          <ListItem key={todo.todo_id}>
            <ListItemText primary={todo.description} />
            <ListItemSecondaryAction>
              <EditTodo item={{ ...todo }} />
              <DeleteTodo itemId={todo.todo_id} />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;
