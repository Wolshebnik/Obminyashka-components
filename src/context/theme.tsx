import React, { PropsWithChildren, useContext } from 'react';
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
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const value = {
    theme: {
      ...LIGHT_THEME,
    },
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
