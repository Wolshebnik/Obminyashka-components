import { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { ChildrenProps } from 'types';
import { LIGHT_THEME } from 'config/theme/theme';
import {
  isMobile,
  isTablet,
  isDesktop,
  isPortrait,
  isTabletUp,
  isLandscape,
} from 'hooks/styles';

export const ThemeWrap = ({ children }: ChildrenProps): JSX.Element => {
  const responsive = {
    isDesktop: isDesktop(),
    isTabletUp: isTabletUp(),
    isTablet: isTablet(),
    isPortrait: isPortrait(),
    isMobile: isMobile(),
    isLandscape: isLandscape(),
  };

  const value = useMemo(
    () => ({
      ...LIGHT_THEME,
      responsive,
    }),
    [responsive]
  );

  return <ThemeProvider theme={value}>{children}</ThemeProvider>;
};
