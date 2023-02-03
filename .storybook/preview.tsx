import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { withConsole } from '@storybook/addon-console';

import { ThemeWrap } from '../src/context';
import { GlobalStyles } from '../src/styles/globalStyles';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addDecorator((story) => (
  <ThemeWrap>
    <GlobalStyles />
    <MemoryRouter>{story()}</MemoryRouter>
    {/* {story()} */}
  </ThemeWrap>
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
