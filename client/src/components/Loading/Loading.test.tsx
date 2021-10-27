import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading', () => {
  it('should render', () => {
    render(<Loading isLoading={true} />);
    screen.getByRole('progressbar', { hidden: true });
  });

  it('shouldnt render if isLoading is false', () => {
    render(<Loading isLoading={false} />);
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });
});
