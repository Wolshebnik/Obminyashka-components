import React from 'react';
// import { addDecorator } from '@storybook/react';n
import { MemoryRouter } from 'react-router-dom';
// import { withConsole } from '@storybook/addon-console';

import { Toast } from '../src/components';
import { ThemeWrap } from '../src/context';
import { GlobalStyles } from '../src/styles/globalStyles';

// addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import theme from './your-theme-file';

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
// addDecorator((story) => (
//   <ThemeWrap>
//     <GlobalStyles />
//     <MemoryRouter>{story()}</MemoryRouter>
//     <Toast limit={5} />
//   </ThemeWrap>
// ));

// addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
