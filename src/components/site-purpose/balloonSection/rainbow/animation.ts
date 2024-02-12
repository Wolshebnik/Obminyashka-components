import { keyframes } from 'styled-components';

export const rainbowAnim = keyframes`
 0% {
    transform: translate(0, 0);
  }
 
 30% {
    transform: translate(2%, -2%);
  }

  60% {
    transform: translate(-2%, 2%);
  }

 100% {
    transform: translate(0, 0);
  }
`;

export const firstCloudAnim = keyframes`
  0% {
    transform: translate(0, 0);
  }

  20% {
    transform: translate(3%, -10%);
  }

  40% {
    transform: translate(2%, -8%);
  }

  60% {
    transform: translate(5%, 2%);
  }

  80% {
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

  20% {
    transform: translate(3%, -10%);
  }

  40% {
    transform: translate(-2%, -8%);
  }

  60% {
    transform: translate(-8%, -2%);
  }

  80% {
    transform: translate(3%, -8%);
  }

  100% {
    transform: translate(0, 0);
  }
`;

export const redBalloonAnim = keyframes`
 0% {
    transform: translate(0, 0);
  } 

  40% {
    transform: translate(0, -15%);
  }

  60% {
    transform: translate(4%, -10%);
  }

  80% {
    transform: translate(2%, -5%);
  }

 100% {
    transform: translate(0, 0);
  }
`;

export const yellowBalloonAnim = keyframes`
 0% {
    transform: translate(0, 0);
  }

  40% {
    transform: translate(10%, -20%);
  }

  60% {
    transform: translate(8%, -15%);
  }

  80% {
    transform: translate(5%, -5%);
  }

 100% {
    transform: translate(0, 0);
  }
`;

export const orangeBalloonAnim = keyframes`
 0% {
    transform: translate(0, 0);
  }

  40% {
    transform: translate(2%, -30%);
  }

  60% {
    transform: translate(2%, -15%);
  }

  80% {
    transform: translate(0, -5%);
  }

 100% {
    transform: translate(0, 0);
  }
`;
