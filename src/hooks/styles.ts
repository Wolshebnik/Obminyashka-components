import { useMediaQuery } from 'react-responsive';

const mobileMaxWidth = 767;
const tabletMaxWidth = 1366;

export const isMobile = () => useMediaQuery({ maxWidth: mobileMaxWidth });

export const isTablet = () =>
  useMediaQuery({
    minWidth: mobileMaxWidth + 1,
    maxWidth: tabletMaxWidth,
  });

export const isTabletUp = () => useMediaQuery({ minWidth: mobileMaxWidth + 1 });

export const isDesktop = () => useMediaQuery({ minWidth: tabletMaxWidth + 1 });

export const isPortrait = () =>
  useMediaQuery({ query: '(orientation: portrait)' });

export const isLandscape = () =>
  useMediaQuery({ query: '(orientation: landscape)' });
