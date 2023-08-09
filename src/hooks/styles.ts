import { useMediaQuery } from 'react-responsive';

const mobileBgMinWidth = 560;
const tabletMinWidth = 768;
const tabletBgMinWidth = 1024;
const desktopMinWidth = 1367;
const desktopMdMinWidth = 1563;
const desktopLgMinWidth = 1721;
const desktopBsMinWidth = 1921;

export const isMobile = () => useMediaQuery({ maxWidth: tabletMinWidth });

export const isMobileBG = () => useMediaQuery({ minWidth: mobileBgMinWidth });

export const isTablet = () =>
  useMediaQuery({
    minWidth: tabletMinWidth,
  });

export const isTabletBG = () =>
  useMediaQuery({
    minWidth: tabletBgMinWidth,
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
