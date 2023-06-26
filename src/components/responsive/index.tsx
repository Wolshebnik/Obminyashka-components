import { ChildrenProps } from 'types';
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

export const Desktop = ({ children }: ChildrenProps): JSX.Element | null => {
  return isDesktop() ? <>{children}</> : null;
};

export const NotDesktop = ({ children }: ChildrenProps): JSX.Element | null => {
  return !isDesktop() ? <>{children}</> : null;
};

export const DesktopXS = ({ children }: ChildrenProps): JSX.Element | null => {
  return isDesktopXS() ? <>{children}</> : null;
};

export const DesktopMD = ({ children }: ChildrenProps): JSX.Element | null => {
  return isDesktopMD() ? <>{children}</> : null;
};

export const DesktopLG = ({ children }: ChildrenProps): JSX.Element | null => {
  return isDesktopLG() ? <>{children}</> : null;
};

export const DesktopBS = ({ children }: ChildrenProps): JSX.Element | null => {
  return isDesktopBS() ? <>{children}</> : null;
};

export const TabletUp = ({ children }: ChildrenProps): JSX.Element | null => {
  return isTabletUp() ? <>{children}</> : null;
};

export const Portrait = ({ children }: ChildrenProps): JSX.Element | null => {
  return isPortrait() ? <>{children}</> : null;
};

export const Landscape = ({ children }: ChildrenProps): JSX.Element | null => {
  return isLandscape() ? <>{children}</> : null;
};

export const Tablet = ({ children }: ChildrenProps): JSX.Element | null => {
  return isTablet() ? <>{children}</> : null;
};

export const Mobile = ({ children }: ChildrenProps): JSX.Element | null => {
  return isMobile() ? <>{children}</> : null;
};

export const NotMobile = ({ children }: ChildrenProps): JSX.Element | null => {
  return !isMobile() ? <>{children}</> : null;
};
