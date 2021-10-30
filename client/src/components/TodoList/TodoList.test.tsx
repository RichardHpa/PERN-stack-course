import { screen } from '@testing-library/react';
import render from 'tests/helpers/ReactQueryWrapper';
import TodoList from '.';

describe('TodoList', () => {
  it('should render', () => {
    render(<TodoList />);
    screen.getByRole('list');
  });
});
