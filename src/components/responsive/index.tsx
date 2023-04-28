import { ChildrenProps } from 'types';
import {
  isTablet,
  isMobile,
  isDesktop,
  isTabletUp,
  isPortrait,
} from 'hooks/styles';

export const Desktop = ({ children }: ChildrenProps): JSX.Element | null => {
  return isDesktop() ? <>{children}</> : null;
};

export const NotDesktop = ({ children }: ChildrenProps): JSX.Element | null => {
  return !isDesktop() ? <>{children}</> : null;
};

export const TabletUp = ({ children }: ChildrenProps): JSX.Element | null => {
  return isTabletUp() ? <>{children}</> : null;
};

export const Portrait = ({ children }: ChildrenProps): JSX.Element | null => {
  return isPortrait() ? <>{children}</> : null;
};

export const Tablet = ({ children }: ChildrenProps): JSX.Element | null => {
  return isTablet() ? <>{children}</> : null;
};

export const Mobile = ({ children }: ChildrenProps): JSX.Element | null => {
  return isMobile() ? <>{children}</> : null;
};
