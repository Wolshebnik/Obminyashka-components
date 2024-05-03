import { keyframes } from 'styled-components';

export const cloudsAnimation = keyframes`
    from {
      right: 0%;
      transform: translateX(100%);
    }
    to {
      right: 100%;
    }
`;

export const cloudNullAnimation = keyframes`
    from {
      right: 0%;
      transform: rotate(10deg) translateX(100%);
    }
    to {
      right: 100%;
    }
`;

export const cloudsAnimationMirror = keyframes`
    from {
      right: 0%;
      transform: rotateY(180deg) translateX(-100%);
    }
    to {
      right: 100%;
    }
`;

export const clockHoverAnimation = keyframes`
    25% {transform: skewX(10deg) translateX(-11px) translateY(-1px);}
    75% {transform: skewX(-10deg) translateX(10px) translateY(-1px);}
`;

export const sunBlockAnimation = keyframes`
    from {
      top: 330px;
      width: 300px;
      left: calc(50% - 400px);
      transform: rotate(270deg);
    }
    to {
      top: 90px;
      width: 240px;
      left: calc(50% - 120px);
      transform: rotate(360deg);
    }
`;

export const sunIconAnimation = keyframes`
    25% {
      transform: rotate(-15deg);
    }
    50% {
      transform: rotate(10deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
`;
