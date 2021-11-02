import { Tooltip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQueryClient, useMutation } from 'react-query';
import { useSnackbar } from 'notistack';
import { deleteTodo } from 'api/todos';

interface DeleteTodoProps {
  itemId: number;
}
const DeleteTodo = ({ itemId }: DeleteTodoProps) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const { mutateAsync } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      enqueueSnackbar('Successfully removed Todo', { variant: 'success' });
    },
    onError: () => {
      enqueueSnackbar('Something went wrong.', { variant: 'error' });
    }
  });

  const handleDelete = async () => {
    await mutateAsync({ id: itemId });
  };

  return (
    <Tooltip title="Delete">
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteTodo;
