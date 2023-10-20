import { keyframes } from 'styled-components';

export const moveLeftWrapper = keyframes`
20% {
  opacity: 0;
}
30% {
  opacity: 1;
}
70% {
  opacity: 1;

}
80% {
  opacity: 0;
}
`;

export const moveRightWrapper = keyframes`
20% {
  opacity: 0;
}
30% {
  opacity: 1;
}
70% {
  opacity: 1;
}
80% {
  opacity: 0;
}
`; ///зробити анімацію для зникнення хмар

export const move1 = keyframes`
 0% {
    transform: translateX(20%) scale(1.3);
  }

  20% {
    transform: translateX(-30%) scale(1);
  }

  80% {
    transform: translateX(-100%);
  }
`;

export const move2 = keyframes`
  0% {
    transform: translate(0, 0);
  }  

  20% {
    transform: translateX(-6vw);
  }

  60% {
    transform: translate(-25vw, 2vh);
  } 

  80% {
    transform: translate(3vw, -30vh) scale(2.5);
  }
`;

export const move3 = keyframes`
  0% {
    transform: translateX(-50%) scale(1.5);
  }

  7% {
    transform: translateX(0) scale(1);
  }

  20% {
    transform: translateX(-30%);
  }

  70% {
    transform: translateX(-100%);
  } 

  80% {
    transform: translateX(-200%) scale(1.5);
  }
`;

export const move4 = keyframes`
  0% {
    transform: translateX(0) scale(1.3);
  }

  5% {
    transform: translateX(3vw);
  }

  20% {
    transform: translateX(-10vw) scale(1);
  }

  40% {
    transform: translateX(-15vw);
  }

  80% {
    transform: translateX(-30vw);
  }
`;

export const move5 = keyframes`
  0% {
    opacity: 0;
  }

  29% {
    opacity: 0;
  }

  30% {
    opacity: 1;
    right: 0;
  }
 
  70% {
    right: 50%;
  }

  73.9% {
    opacity: 1;
    transform: scale(1);
  }

  74%{
    opacity: 0;
    transform: scale(2);
    right: -10%;
  }

  100% {
    opacity: 0;
  }
 

`;

export const move6 = keyframes`
  0% {
    transform: translateY(-20vh) scale(2);
  }
  5% {
    transform: translate(-2vw, -2vh) scale(1);
  }

  40% {
    transform: translate(-8vw, 4vh);
  }

  70% {
    transform: translate(-9vw, -2vh);
  }

  80% {
    transform: translate(-6vw, -40vh) scale(2);
  } 

  /* 100% {
    transform: translate(0, 0);
  } */
`;

export const move7 = keyframes`
  0% {
    transform: translate(0, 0) scale(2);
  }
  7% {
    transform: translateX(-3vw) scale(1);
  }

  40% {
    transform: translateX(-20vw);
  }

  70% {
    transform: translateX(-40vw);
  }

  80% {
    transform: translateX(20vh) scale(2);
  } 

  /* 100% {
    transform: translate(0, 0);
  } */

`;
