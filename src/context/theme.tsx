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
  isDesktopBS,
  isDesktopLG,
  isDesktopMD,
  isDesktopXS,
  isLandscape,
} from 'hooks/styles';

export const ThemeWrap = ({ children }: ChildrenProps): JSX.Element => {
  const responsive = {
    isDesktop: isDesktop(),
    isDesktopBS: isDesktopBS(),
    isDesktopLG: isDesktopLG(),
    isDesktopMD: isDesktopMD(),
    isDesktopXS: isDesktopXS(),
    isLandscape: isLandscape(),
    isMobile: isMobile(),
    isPortrait: isPortrait(),
    isTablet: isTablet(),
    isTabletUp: isTabletUp(),
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
