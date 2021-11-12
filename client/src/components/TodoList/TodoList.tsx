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
import moment from 'moment-timezone';

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const getLocalTime = (date: Date, format = 'LT DD-MM-YYYY') => {
  return moment(date).tz(timezone).format(format);
};

const TodoList = () => {
  const { data } = useQuery('todos', getAllTodos);

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
