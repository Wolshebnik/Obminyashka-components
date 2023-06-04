import { keyframes } from 'styled-components';

export const rotateAnimation = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0deg) translateX(-100%);
  }
  30% {
    opacity: 1;
    transform: rotate(-45deg) translateX(30%);
  }
  70% {
    opacity: 1;
    transform: rotate(0deg) translateX(70%);
  }
  100% {
    opacity: 1;
    transform: rotate(45deg) translateX(100%);
  }
`;
