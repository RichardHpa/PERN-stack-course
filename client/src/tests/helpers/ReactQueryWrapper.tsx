import { render as testingRender } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface ReactQueryWrapperProps {
  children: any;
}

export const ReactQueryWrapper = ({ children }: ReactQueryWrapperProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const render = (component: any) => {
  return testingRender(<ReactQueryWrapper>{component}</ReactQueryWrapper>);
};

export default render;
