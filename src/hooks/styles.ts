import { useMediaQuery } from 'react-responsive';

const mobileMinWidth = 375;
const tabletMinWidth = 768;
const desktop = 1367;
const desktopMdMinWidth = 1563;
const desktopLgMaxWidth = 1721;
const desktopBsMaxWidth = 1921;

export const isMobile = () => useMediaQuery({ minWidth: mobileMinWidth });

export const isTablet = () =>
  useMediaQuery({
    minWidth: tabletMinWidth,
    // maxWidth: tabletMaxWidth,
  });

export const isTabletUp = () => useMediaQuery({ minWidth: tabletMinWidth });

export const isDesktop = () => useMediaQuery({ minWidth: desktop });

export const isDesktopXS = () =>
  useMediaQuery({
    minWidth: desktop,
    // maxWidth: desktopXsMaxWidth,
  });

export const isDesktopMD = () =>
  useMediaQuery({
    minWidth: desktopMdMinWidth,
    // maxWidth: desktopMdMaxWidth,
  });

export const isDesktopLG = () =>
  useMediaQuery({
    minWidth: desktopLgMaxWidth,
    // maxWidth: desktopLgMaxWidth,
  });

export const isDesktopBS = () =>
  useMediaQuery({
    minWidth: desktopBsMaxWidth,
  });

export const isPortrait = () =>
  useMediaQuery({ query: '(orientation: portrait)' });

export const isLandscape = () =>
  useMediaQuery({ query: '(orientation: landscape)' });
