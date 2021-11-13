import { useQuery } from 'react-query';
import { getAllTodos } from 'api/todos';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Alert
} from '@mui/material';
import DeleteTodo from 'components/DeleteTodo';
import EditTodo from 'components/EditTodo';
import moment from 'moment-timezone';

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const getLocalTime = (date: Date, format = 'LT DD-MM-YYYY') => {
  return moment(date).tz(timezone).format(format);
};

const TodoList = () => {
  const { data, isLoading } = useQuery('todos', getAllTodos);

  if (isLoading) {
    return <Alert severity="info">Loading</Alert>;
  }
  if (data.length === 0) {
    return <Alert severity="info">This is an info alert — check it out!</Alert>;
  }

  return (
    <List>
      {data?.map(
        (todo: { todo_id: number; description: string; createdAt: Date }) => {
          return (
            <ListItem key={todo.todo_id}>
              <ListItemText
                primary={todo.description}
                secondary={`created at ${getLocalTime(
                  todo.createdAt,
                  'LT [on the] DD-MM-YYYY'
                )}`}
              />
              <ListItemSecondaryAction>
                <EditTodo item={{ ...todo }} />
                <DeleteTodo itemId={todo.todo_id} />
              </ListItemSecondaryAction>
            </ListItem>
          );
        }
      )}
    </List>
  );
};

export default TodoList;
