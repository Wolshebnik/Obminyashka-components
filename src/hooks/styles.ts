import { useMediaQuery } from 'react-responsive';

const mobileMaxWidth = 767;
const tabletMaxWidth = 1023;

export const isDesktop = () => useMediaQuery({ minWidth: tabletMaxWidth + 1 });

export const isTablet = () =>
  useMediaQuery({ minWidth: mobileMaxWidth + 1, maxWidth: tabletMaxWidth });

export const isPortrait = () =>
  useMediaQuery({ query: '(orientation: portrait)' });

export const isTabletUp = () => useMediaQuery({ minWidth: mobileMaxWidth + 1 });

export const isMobile = () => useMediaQuery({ maxWidth: mobileMaxWidth });
