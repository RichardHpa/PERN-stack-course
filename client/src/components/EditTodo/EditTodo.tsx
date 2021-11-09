import { useState } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import {
  Tooltip,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { updateTodo } from 'api/todos';
import type { VFC } from 'react';

interface EditTodoProps {
  item: itemProps;
}

interface itemProps {
  todo_id: number;
  description: string;
}

const EditTodo: VFC<EditTodoProps> = ({ item }) => {
  const { todo_id, description: currentDescription } = item;
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(currentDescription);

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleUpdateTodo = () => {
    console.log(todo_id);
  };

  return (
    <>
      <Tooltip title="Edit">
        <IconButton aria-label="edit" onClick={handleToggleEdit}>
          <CreateIcon />
        </IconButton>
      </Tooltip>

      <Dialog open={isEditing} onClose={handleToggleEdit}>
        <DialogTitle>Update Todo - `{currentDescription}`</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To update a todo, enter a new title. This will update the title of
            the current todo.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="updateTodo"
            label="Update Todo"
            type="text"
            fullWidth
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggleEdit}>Cancel</Button>
          <Button onClick={handleUpdateTodo}>Update</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditTodo;
