import { keyframes } from 'styled-components';

export const move1 = keyframes`
  0% {
    opacity: 0;
  }

  29% {
    opacity: 0;
  }

  30% {
    opacity: 1;
    left: 0;
  }

  60% {
    right: 30%;
  }

  73.9% {
    opacity: 1;
  }

  74%{
    opacity: 0;
    left: -20%;
  }

  100% {
    opacity: 0;
  }
`;

export const move2 = keyframes`
  0% {
    opacity: 0;
  }

  29% {
    opacity: 0;
  }

  30% {
    opacity: 1;
    transform: scale(1.5);
    top: 12%;
  }
  33% {
    transform: scale(1);
  }

  60% {
    left: 10%;
  }

  70% {
    top: 5%;
  }

  73.9% {
    opacity: 1;
  }
  
  74%{
    top: -10%;
    transform: scale(1.5);
  }

  100% {
    opacity: 0;
  }
`;

export const move3 = keyframes`
  0% {
    opacity: 0;
  }

  29% {
    opacity: 0;
  }

  30% {
    opacity: 1;
    transform: scale(1.3);
    left: 10%;
  }

  32% {
    transform: scale(1);
  }

  70% {
    left: -10%;
    opacity: 1;
  }

  100% {
    left: -100%;
    opacity: 0;
  }
`;

export const move4 = keyframes`
  0% {
    opacity: 0;
  }

  29% {
    opacity: 0;
  }

  30% {
    opacity: 1;
    transform: scale(1.5);
  }

  32%{
    transform: scale(1);
  }

  73.9% {
    opacity: 1;
  }

  74%{
    opacity: 0;
    left: -20%;
  }

  100% {
    opacity: 0;
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
    transform: scale(1.5);
  }

  32% {
    transform: scale(1);
  }
 
  70% {
    right: 20%;
    transform: scale(1);
  }

  73.9% {
    opacity: 1;
    transform: scale(2);
  }

  74%{
    opacity: 0;
    right: -10%;
   
  }

  100% {
    opacity: 0;
  }
`;

export const move6 = keyframes`
  0% {
    opacity: 0;
  }

  29% {
    opacity: 0;
  }

  30% {
    opacity: 1;
    transform: scale(1.5);
  }

  32% {
    transform: scale(1);
    right: 27%;
  }

  60% {
    right: 40%;
    top: 5%;
  }

  73.9% {
    opacity: 1;
  }

  74%{
    opacity: 0;
    top: -10%;
  }

  100% {
    opacity: 0;
  }
`;

export const move7 = keyframes`
  0% {
    opacity: 0;
  }

  29% {
    opacity: 0;
  }

  30% {
    opacity: 1;
    left: 95%;
    transform: scale(1.5);
  }

  32% {
    transform: scale(1);
  }

  60% {
    left: 55%;
  }

  70% {
    transform: scale(1);
    left: 55%;
  }

  72% {
    transform: scale(1.5);
  }

  73.9% {
    opacity: 1;
    transform: scale(2);
  }

  74%{
    opacity: 0;
    left: 95%;
  }

  100% {
    opacity: 0;
  }
`;

export const move8 = keyframes`
  0% {
    opacity: 0;
  }

  29% {
    opacity: 0;
    left: 5%;
  }

  30% {
    opacity: 1;
    transform: scale(1.5);
    left: 12%;
  }

  32% {
    transform: scale(1);
  }

  36% {
    transform: translate(20px, 30px);
  }

  40% {
    transform: translate(40px, 20px);
  }

  50% {
    transform: translate(20px, 30px);
  }

  70% {
    transform: scale(1);
    left: 12%;
  }

  73.8% {
    opacity: 1;
    transform: scale(1.5);
    left: -8%;
  }

  74%{
    opacity: 0;
    left: -65%;
  }

  100% {
    opacity: 0;
  }
`;
