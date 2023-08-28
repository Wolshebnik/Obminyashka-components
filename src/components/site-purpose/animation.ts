import { keyframes } from 'styled-components';

export const appearAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const disappearAnimation = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: 0;
    transform: scale(0);
  }
`;

export const cycleAnimation = keyframes`
  20% {
    opacity: 1;
    transform: scale(1);
  }

  30% {
    opacity: 0;
    transform: scale(0);
  }

  70% {
    opacity: 0;
    transform: scale(0);
  }

  80% {
    opacity: 1;
    transform: scale(1);
  }
`;
