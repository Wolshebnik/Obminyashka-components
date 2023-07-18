import { useMediaQuery } from 'react-responsive';

const tabletMinWidth = 767;
const desktopMinWidth = 1367;
const desktopMdMinWidth = 1563;
const desktopLgMinWidth = 1721;
const desktopBsMinWidth = 1921;

export const isMobile = () => useMediaQuery({ maxWidth: tabletMinWidth });

export const isTablet = () =>
  useMediaQuery({
    minWidth: tabletMinWidth,
  });

export const isTabletUp = () => useMediaQuery({ minWidth: tabletMinWidth });

export const isDesktop = () => useMediaQuery({ minWidth: desktopMinWidth });

export const isDesktopMD = () =>
  useMediaQuery({
    minWidth: desktopMdMinWidth,
  });

export const isDesktopLG = () =>
  useMediaQuery({
    minWidth: desktopLgMinWidth,
  });

export const isDesktopBS = () =>
  useMediaQuery({
    minWidth: desktopBsMinWidth,
  });

export const isPortrait = () =>
  useMediaQuery({ query: '(orientation: portrait)' });

export const isLandscape = () =>
  useMediaQuery({ query: '(orientation: landscape)' });
