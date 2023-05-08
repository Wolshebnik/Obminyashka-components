declare module 'styled-components';

import 'styled-components';

import { COLORS } from './theme/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof COLORS;
    borderRadius: string;
    transition: {
      default: string;
      dropDown: string;
    };
    responsive: {
      isDesktop: boolean;
      isTablet: boolean;
      isLandscape: boolean;
      isPortrait: boolean;
      isTabletUp: boolean;
      isMobile: boolean;
      isLandscape: boolean;
    };
  }
}
