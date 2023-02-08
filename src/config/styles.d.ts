declare module 'styled-components';
// import original module declarations
import 'styled-components';

import { COLORS } from './theme/colors';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof COLORS;
    borderRadius: string;
    transition: {
      default: string;
    };
  }
}
