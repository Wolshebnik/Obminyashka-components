import React, { useContext } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { ChildrenProps } from 'types';
import { LIGHT_THEME } from 'config/theme/theme';

interface ThemeContextProps {
  theme: DefaultTheme;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: {
    ...LIGHT_THEME,
  },
});

export const ThemeWrap = ({ children }: ChildrenProps): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
