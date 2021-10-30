import { screen } from '@testing-library/react';
import render from 'tests/helpers/ReactQueryWrapper';
import TodoList from '.';

describe('TodoList', () => {
  it('should render', () => {
    render(<TodoList />);
    screen.getByRole('list');
  });

  it('should render all 3 list of todos', async () => {
    render(<TodoList />);
    const items = await screen.findAllByRole('listitem');
    expect(items.length === 3).toBeTruthy();
    screen.getByText('Mow Lawns');
    screen.getByText('Cleaning Room');
    screen.getByText('Wash Clothes');
  });
});
