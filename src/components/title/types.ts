import { CSSProperties } from 'react';

export interface ITitle {
  text: string;
  style?: CSSProperties;
  hiddenDots?: true | false;
}
