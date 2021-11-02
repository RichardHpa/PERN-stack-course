import { ReactQueryWrapper } from './helpers/ReactQueryWrapper';
import { SnackbarProviderWrapper } from './helpers/SnackbarWrapper';
import { render as testingRender } from '@testing-library/react';

const render = (component: any) => {
  return testingRender(
    <ReactQueryWrapper>
      <SnackbarProviderWrapper>{component}</SnackbarProviderWrapper>
    </ReactQueryWrapper>
  );
};

export default render;
