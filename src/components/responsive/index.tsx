import { ChildrenProps } from 'types';
import {
  isMobile,
  isTablet,
  isDesktop,
  isMobileBG,
  isTabletBG,
  isPortrait,
  isTabletUp,
  isDesktopBS,
  isDesktopLG,
  isDesktopMD,
  isLandscape,
} from 'hooks/styles';

export const Desktop = ({ children }: ChildrenProps): JSX.Element | null => {
  return isDesktop() ? <>{children}</> : null;
};

export const NotDesktop = ({ children }: ChildrenProps): JSX.Element | null => {
  return !isDesktop() ? <>{children}</> : null;
};

export const NotDesktopMD = ({
  children,
}: ChildrenProps): JSX.Element | null => {
  return !isDesktopMD() ? <>{children}</> : null;
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

export const TabletBG = ({ children }: ChildrenProps): JSX.Element | null => {
  return isTabletBG() ? <>{children}</> : null;
};

export const Mobile = ({ children }: ChildrenProps): JSX.Element | null => {
  return isMobile() ? <>{children}</> : null;
};

export const MobileBG = ({ children }: ChildrenProps): JSX.Element | null => {
  return isMobileBG() ? <>{children}</> : null;
};

export const NotMobile = ({ children }: ChildrenProps): JSX.Element | null => {
  return !isMobile() ? <>{children}</> : null;
};
