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
      isDesktopBS: boolean;
      isDesktopLG: boolean;
      isDesktopMD: boolean;
      isDesktopXS: boolean;
      isLandscape: boolean;
      isMobile: boolean;
      isPortrait: boolean;
      isTablet: boolean;
      isTabletUp: boolean;
    };
  }
}
