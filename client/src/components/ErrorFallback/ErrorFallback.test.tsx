import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '.';

interface wrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: wrapperProps) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
};

interface ComponentProps {
  error?: boolean;
}

const Component = ({ error = false }: ComponentProps) => {
  if (error) throw new Error('this is an error');
  return <>There should not be an error</>;
};

describe('ErrorBoundaryFallbackAlert', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
    jest
      .spyOn(ReactErrorBoundary.prototype, 'reset')
      .mockImplementation(jest.fn());
  });

  it(`should render its children`, () => {
    const { container } = render(
      <Wrapper>
        <Component />
      </Wrapper>
    );
    expect(container.textContent).toEqual('There should not be an error');
  });

  it(`should throw an error`, async () => {
    render(
      <Wrapper>
        <Component error={true} />
      </Wrapper>
    );
    await screen.findByRole('alert');
    const checkContent = screen.getByTestId('alert-title');
    expect(checkContent).toHaveTextContent(/^something went wrong./i);
  });

  it(`retry error boundary`, async () => {
    render(
      <Wrapper>
        <Component error={true} />
      </Wrapper>
    );
    const button = await screen.findByRole('button', { name: 'Retry' });
    userEvent.click(button);
    expect(ReactErrorBoundary.prototype.reset).toHaveBeenCalled();
  });
});
