import React, { useContext } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { ChildrenProps } from 'types';
import { LIGHT_THEME } from 'config/theme/theme';
import {
  isMobile,
  isTablet,
  isDesktop,
  isPortrait,
  isTabletUp,
} from 'hooks/styles';

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

  const value = {
    ...theme,
    responsive: {
      isDesktop: isDesktop(),
      isTabletUp: isTabletUp(),
      isTablet: isTablet(),
      isPortrait: isPortrait(),
      isMobile: isMobile(),
    },
  };

  return <ThemeProvider theme={value}>{children}</ThemeProvider>;
};
