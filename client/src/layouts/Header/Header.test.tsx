import { screen, render } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('should render', () => {
    render(<Header />);
    screen.getByText('TODO List');
  });
});
