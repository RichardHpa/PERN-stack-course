import { screen } from '@testing-library/react';
import render from 'tests/AppWrapper';
import EditTodo from '.';
import userEvent from '@testing-library/user-event';

import singleTodo from 'mocks/fixtures/SingleTodo';

describe('EditTodo', () => {
  it('should render', async () => {
    render(<EditTodo item={singleTodo} />);
    await screen.findByRole('button', { name: 'edit' });
  });

  it('open dialog', async () => {
    render(<EditTodo item={singleTodo} />);
    const button = await screen.findByRole('button', { name: 'edit' });
    userEvent.click(button);
    await screen.findByRole('dialog');
    screen.getByText('Update Todo - `Mow Lawns`');
  });

  it('can update a todo', async () => {
    render(<EditTodo item={singleTodo} />);
    const button = await screen.findByRole('button', { name: 'edit' });
    userEvent.click(button);
    await screen.findByRole('dialog');
    const input = screen.getByRole('textbox', { name: 'Update Todo' });
    userEvent.type(input, 'Update Todo');
    userEvent.click(screen.getByRole('button', { name: 'Update' }));
    await screen.findByRole('alert');
    screen.getByText('Successfully updated Todo');
    expect(input).not.toBeInTheDocument();
  });
});
