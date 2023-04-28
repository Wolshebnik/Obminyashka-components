import { DefaultTheme } from 'styled-components';

import { COLORS } from './colors';

const LIGHT_THEME: DefaultTheme = Object.freeze({
  colors: COLORS,
  borderRadius: '8px',
  transition: {
    default: 'all ease-in-out 0.3s',
  },
  responsive: {
    isDesktop: true,
    isTabletUp: false,
    isTablet: false,
    isPortrait: false,
    isMobile: false,
  },
});

export { LIGHT_THEME };
