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

export const balloonAnimation = keyframes`
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
69% {
  bottom: 0;
}
75% {
  bottom: -100%;
}
`;

export const ColunmAnimation1 = keyframes`
  0% {
    left: 0;
  }

  27% {
    left: 0;
  }
  
  33% {
    opacity: 1;
    left: -100%;
  }

  34% {
    opacity: 0; 
  }

  93% {
    left: 200%;
    opacity: 0;
  }

  94% {
    left: 200%;
  }

  100% {
    left: 0;
    opacity: 1;
  }
`;

export const ColunmAnimation2 = keyframes`
  0% {
    left: 200%;
    opacity: 1;
  }

  27% {
    left: 200%;
    opacity: 1;
  }

  33% {
    left: 0;
  }

  60% {
    left: 0;
  }

  66% {
    left: -100%;
    opacity: 1;
  }

  67% {
    left: -100%;
    opacity: 0;
  }

  94% {
    left: 200%;
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const ColunmAnimation3 = keyframes`
  0% {
    left: 200%;
    opacity: 0;
  }

  27% {
    left: 200%;
    opacity: 1;
  }
  60% {
    left: 200%;
    opacity: 1;
  }

  66% {
    left: 0;
  }

  93% {
    left: 0;
    opacity: 1;
  }

  99% {
    left: -100%;
    opacity: 1;
  }
  
  100% {
    left: -100%;
    opacity: 0;
  }
`;

export const featuresAnimationMobile = keyframes`
0% {
  left: 0;
}
22% {
  left: 0;
}
25% {
  left: -100%;
}

47% {
  left: -100%;
}
50% {
  left: -200%;
}

72% {
  left: -200%;
}
75% {
  left: -100%;
}

97% {
  left: -100%;
}
100% {
  left: 0;
}

`;
// export const featuresAnimationMobile = keyframes`
// 0% {
//   left: 0;
// }
// 22% {
//   left: 0;
// }
// 25% {
//   left: -100%;
// }

// 47% {
//   left: -100%;
// }
// 50% {
//   left: -200%;
// }

// 72% {
//   left: -200%;
// }
// 75% {
//   left: -100%;
// }

// 97% {
//   left: -100%;
// }
// 100% {
//   left: 0;
// }
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
67% {
  opacity: 1;
  transform: scale(1) rotate(5deg);
}
72% {
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
67% {
  opacity: 1;
  transform: scale(1) rotate(-5deg);
}
72% {
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
67% {
  opacity: 1;
  transform: scale(1) rotate(-5deg);
}
72% {
  opacity: 0;
  transform: scale(0);
}
`;
