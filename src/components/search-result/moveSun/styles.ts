import styled, { keyframes } from 'styled-components';

import sunDesktop from 'assets/img/sun/sun-desktop.png';
import { displayStyles } from '../styles';

const sunAnimation = keyframes`
  0% {
     bottom: 23%;
     left: 43%;
     transform: rotateZ(0);
  }
  12.5% {
     bottom: 17%;
     left: 38%;
     transform: rotateZ(-7deg);
  }
  25%{
     bottom:20%;
     left: 36%;
     transform: rotateZ(7deg);
  }
  37.5%{
     bottom: 23%;
     left: 40%;
     transform: rotateZ(-7deg);
  }
  50%{
    bottom: 26%;
    left: 43%;
    transform: rotateZ(7deg);
  }
  62.5%{
    bottom: 23%;
    left: 46%;
    transform: rotateZ(-7deg);
  }
  75%{
     bottom: 20%;
     left: 50%;
     transform: rotateZ(7deg);
  }
  87.5%{
     bottom: 17%;
     left: 48%;
     transform: rotateZ(-7deg);
  }

  100% {
     bottom: 23%;
     left: 43%;
     transform: rotateZ(0)
  }
`;

export const DefaultSun = styled.div`
  position: absolute;
  bottom: 23%;
  left: 43%;
  width: 269px;
  height: 269px;
  background-image: url(${sunDesktop});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 5;
  animation: ${sunAnimation} 7s linear infinite;

  ${displayStyles}
`;
