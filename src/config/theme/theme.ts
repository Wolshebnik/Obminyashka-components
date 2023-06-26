import { DefaultTheme } from 'styled-components';

import { COLORS } from './colors';

const LIGHT_THEME: DefaultTheme = Object.freeze({
  colors: COLORS,
  borderRadius: '8px',
  transition: {
    dropDown: 'transform ease-in-out 0.6s',
    default: 'all ease-in-out 0.3s',
  },
  responsive: {
    isMobile: true,
    isTablet: false,
    isDesktop: false,
    isPortrait: false,
    isTabletUp: false,
    isLandscape: false,
    isDesktopBS: false,
    isDesktopLG: false,
    isDesktopMD: false,
    isDesktopXS: false,
  },
});

export { LIGHT_THEME };
