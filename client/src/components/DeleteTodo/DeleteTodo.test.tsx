import { screen } from '@testing-library/react';
import render from 'tests/AppWrapper';
import DeleteTodo from '.';
import userEvent from '@testing-library/user-event';

describe('DeleteTodo', () => {
  it('should render', async () => {
    render(<DeleteTodo itemId={1} />);
    await screen.findByRole('button', { name: 'delete' });
  });

  it('should show success message if delete is successful', async () => {
    render(<DeleteTodo itemId={1} />);
    const button = await screen.findByRole('button', { name: 'delete' });
    userEvent.click(button);
    await screen.findByRole('alert');
    screen.getByText('Successfully removed Todo');
  });
});
