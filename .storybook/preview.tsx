import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Toast } from '../src/components';
import { ThemeWrap } from '../src/context';
import { GlobalStyles } from '../src/styles/globalStyles';

export const decorators = [
  (Story) => (
    <ThemeWrap>
      <GlobalStyles />
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
      <Toast limit={5} />
    </ThemeWrap>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
