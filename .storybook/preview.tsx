import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { withConsole } from '@storybook/addon-console';

import { Toast } from '../src/components';
import { GlobalStyles } from '../src/styles/globalStyles';
import { ThemeWrap, ThemeContextProvider } from '../src/context';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addDecorator((story) => (
  <ThemeContextProvider>
    <ThemeWrap>
      <GlobalStyles />
      <MemoryRouter>{story()}</MemoryRouter>
      <Toast limit={5}/>
    </ThemeWrap>
  </ThemeContextProvider>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
