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

export const cycledAnimation = keyframes`
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

export const featuresAnimation = keyframes`
20% {
  bottom: -100%;
}
30% {
  bottom: 0;
}
70% {
  bottom: 0;
}
80% {
  bottom: -100%;
}
`;

// export const blockAnimation = keyframes`
// 30% {
//   transform: translateY(-15%);
// }
// 80% {
//   transform: translateY(0%);
// }
// `;

export const stretchAndFall = keyframes`
  0% {
    transform: scaleY(1);
  }
  30% {
    transform: scaleY(1.3);
  }
  100% {
    transform: scaleY(1);
  }
`;
