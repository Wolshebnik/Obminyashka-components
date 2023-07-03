import { useMediaQuery } from 'react-responsive';

const mobileMaxWidth = 767;
const tabletMaxWidth = 1366;
const desktopXsMaxWidth = 1562;
const desktopMdMaxWidth = 1720;
const desktopLgMaxWidth = 1920;

export const isMobile = () => useMediaQuery({ maxWidth: mobileMaxWidth });

export const isTablet = () =>
  useMediaQuery({
    minWidth: mobileMaxWidth + 1,
    maxWidth: tabletMaxWidth,
  });

export const isTabletUp = () => useMediaQuery({ minWidth: mobileMaxWidth + 1 });

export const isDesktop = () => useMediaQuery({ minWidth: tabletMaxWidth + 1 });

export const isDesktopXS = () =>
  useMediaQuery({
    minWidth: tabletMaxWidth + 1,
    maxWidth: desktopXsMaxWidth,
  });

export const isDesktopMD = () =>
  useMediaQuery({
    minWidth: desktopXsMaxWidth + 1,
    maxWidth: desktopMdMaxWidth,
  });

export const isDesktopLG = () =>
  useMediaQuery({
    minWidth: desktopMdMaxWidth + 1,
    maxWidth: desktopLgMaxWidth,
  });

export const isDesktopBS = () =>
  useMediaQuery({
    minWidth: desktopLgMaxWidth + 1,
  });

export const isPortrait = () =>
  useMediaQuery({ query: '(orientation: portrait)' });

export const isLandscape = () =>
  useMediaQuery({ query: '(orientation: landscape)' });
