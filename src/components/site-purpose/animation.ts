import { keyframes } from 'styled-components';

export const rainbowAnim = keyframes`
 0% {
    transform: translate(0, 0);
  }
 
 30% {
    transform: translate(2%, -3%);
  }

  60% {
    transform: translate(-2%, 3%);
  }

 100% {
    transform: translate(0, 0);
  }
`;

export const redBallonAnim = keyframes`
 0% {
    transform: translate(0, 0);
  }

  40% {
    transform: translate(0, -10%);
  }

  60% {
    transform: translate(0, -8%);
  }

  80% {
    transform: translate(0, -5%);
  }

 100% {
    transform: translate(0, 0);
  }
`;

export const yellowBallonAnim = keyframes`
 0% {
    transform: translate(0, 0);
  }

  40% {
    transform: translate(0, -10%);
  }

  60% {
    transform: translate(0, -8%);
  }

  80% {
    transform: translate(0, -5%);
  }

 100% {
    transform: translate(0, 0);
  }
`;

export const firstCloudAnim = keyframes`
  0% {
    transform: translate(0, 0);
  }

  30% {
    transform: translate(3%, -10%);
  }

  50% {
    transform: translate(1%, -8%);
  }

  70% {
    transform: translate(5%, 0);
  }

  90% {
    transform: translate(3%, -10%);
  }

  100% {
    transform: translate(0, 0);
  }
`;

export const secondCloudAnim = keyframes`
  0% {
    transform: translate(0, 0);
  }

  30% {
    transform: translate(4%, -10%);
  }

  50% {
    transform: translate(-2%, -8%);
  }

  70% {
    transform: translate(-8%, -2%);
  }

  90% {
    transform: translate(3%, -8%);
  }

  100% {
    transform: translate(0, 0);
  }
`;
