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

// const transformForColumns = keyframes`
//   60% {
//     transform: scaleY(1);
//   }
//   62% {
//     transform: scaleY(1.5);
//   }
//   64% {
//     transform: scaleY(1);
//   }
// `;

export const stretchFirstColumn = keyframes`
  0% {
    transform: scaleY(1);
  }
  33% {
    transform: scaleY(1);
  }
  35% {
    transform: scaleY(1.2);
  }
  37% {
    transform: scaleY(1);
  }
  60% {
    transform: scaleY(1);
  }
  62% {
    transform: scaleY(1.2);
  }
  64% {
    transform: scaleY(1);
  }
`;

export const stretchSecondColumn = keyframes`
  0% {
    transform: scaleY(1);
  }
  40% {
    transform: scaleY(1);
  }
  42% {
    transform: scaleY(1.2);
  }
  44% {
    transform: scaleY(1);
  }
  60% {
    transform: scaleY(1);
  }
  62% {
    transform: scaleY(1.2);
  }
  64% {
    transform: scaleY(1);
  }
`;

export const stretchThirdColumn = keyframes`
  0% {
    transform: scaleY(1);
  }
  46% {
    transform: scaleY(1);
  }
  48% {
    transform: scaleY(1.2);
  }
  50% {
    transform: scaleY(1);
  }
  60% {
    transform: scaleY(1);
  }
  62% {
    transform: scaleY(1.2);
  }
  64% {
    transform: scaleY(1);
  }
`;

export const appearanceFirstImages = keyframes`
35% {
  opacity: 0;
  transform: scale(0) rotate(0deg);
}
37% {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
50% {
  opacity: 1;
  transform: scale(1) rotate(-5deg);
}
65% {
  opacity: 1;
  transform: scale(1) rotate(5deg);
}
77% {
  opacity: 0;
  transform: scale(0);
}
`;

export const appearanceSecondImages = keyframes`
42% {
  opacity: 0;
  transform: scale(0) rotate(0deg);
}
45% {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
57% {
  opacity: 1;
  transform: scale(1) rotate(5deg);
}
65% {
  opacity: 1;
  transform: scale(1) rotate(-5deg);
}
77% {
  opacity: 0;
  transform: scale(0);
}
`;

export const appearanceThirdImages = keyframes`
48% {
  opacity: 0;
  transform: scale(0) rotate(0deg);
}
50% {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
57% {
  opacity: 1;
  transform: scale(1) rotate(5deg);
}
65% {
  opacity: 1;
  transform: scale(1) rotate(-5deg);
}
77% {
  opacity: 0;
  transform: scale(0);
}
`;
