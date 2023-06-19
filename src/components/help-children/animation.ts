import { keyframes } from 'styled-components';

export const rotateAnimation = keyframes`
  0% {
    transform: translateX(250%) rotate(20deg);
    visibility: hidden;
    opacity: 0;
  }
  5% {
    transform: translateX(200%) rotate(10deg);
    opacity: 0.5;
    visibility: visible;
  }
  40% {
    transform: translateX(100%) rotate(-40deg);
    opacity: 1;
  }
  60% {
    transform: translateX(30%) rotate(-70deg);
    opacity: 1;
  }
  80% {
    transform: translateX(0) rotate(-110deg);
    opacity: 1;
  }
`;

export const rotateAnimationTwo = keyframes`
  0% {
    transform: translateX(250%) rotate(-40deg);
    visibility: hidden;
    opacity: 0;
  }
  5% {
    transform: translateX(200%) rotate(-35deg);
    opacity: 0.5;
    visibility: visible;
  }
  40% {
    transform: translateX(100%) rotate(-10deg);
    opacity: 1;
  }
  60% {
    transform: translateX(30%) rotate(15deg);
    opacity: 1;
  }
  80% {
    transform: translateX(0) rotate(30deg);
    opacity: 1;
  }
`;

export const rotateAnimationThree = keyframes`
  0% {
    transform: translateX(250%) rotate(-160deg);
    visibility: hidden;
    opacity: 0;
  }
  5% {
    transform: translateX(200%) rotate(-150deg);
    opacity: 0.5;
    visibility: visible;
  }
  40% {
    transform: translateX(100%) rotate(-100deg);
    opacity: 1;
  }
  60% {
    transform: translateX(30%) rotate(-50deg);
    opacity: 1;
  }
  80% {
    transform: translateX(0) rotate(-34deg);
    opacity: 1;
  }
`;

export const rotateAnimationFour = keyframes`
  0% {
    transform: translateX(250%) rotate(-90deg);
    visibility: hidden;
    opacity: 0;
  }
  5% {
    transform: translateX(200%) rotate(-85deg);
    opacity: 0.5;
    visibility: visible;
  }
  40% {
    transform: translateX(100%) rotate(-35deg);
    opacity: 1;
  }
  60% {
    transform: translateX(30%) rotate(-10deg);
    opacity: 1;
  }
  80% {
    transform: translateX(0) rotate(17deg);
    opacity: 1;
  }
`;
