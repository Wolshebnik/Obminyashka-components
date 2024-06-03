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
