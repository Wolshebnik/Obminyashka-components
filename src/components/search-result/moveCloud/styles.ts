import styled, { keyframes } from 'styled-components';

import сloud from 'assets/img/cloud.png';

const moveClouds1 = keyframes`
  0% {
    left: 15%;
  }
 80% {
    opacity: 1;
    left: 80%;
  }
  80.1% {
    opacity: 0;
    left: 80%;
  }
  80.2% {
    opacity: 0;
    left: 3%;
  }
  100% {
    left: 15%;
  }
`;

const moveClouds2 = keyframes`
  0% {
    right: 10%;
  }
 5% {
    opacity: 1;
    right: 5%;
  }
  5.1% {
    opacity: 0;
    right: 5%;
  }
  5.2% {
   opacity: 0;
   right: 85%;
  }
  5.3%{  
   opacity: 1;
   right: 85%;
  }
  100% {
   right: 10%;
  }
`;

const moveClouds3 = keyframes`
  0% {
    left: 28%;
  }
 90% {
    opacity: 1;
    left: 65%;
  }
  90.1% {
    opacity: 0;
    left: 65%;
  }
  90.2% {
    opacity: 0;
    left: 17%;
  }
  100% {
    left: 28%;
  }
`;

export const FirstCloud = styled.span`
  position: absolute;
  top: 30%;
  left: 15%;
  width: 71px;
  height: 38px;
  background-image: url(${сloud});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  animation: ${moveClouds1} 60s linear infinite;
`;

export const SecondCloud = styled.span`
  position: absolute;
  bottom: 30%;
  right: 10%;
  width: 71px;
  height: 38px;
  background-image: url(${сloud});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  animation: ${moveClouds2} 75s linear infinite;
`;

export const ThirdCloud = styled.span`
  position: absolute;
  bottom: 12%;
  left: 28%;
  width: 113px;
  height: 61px;
  background-image: url(${сloud});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  animation: ${moveClouds3} 40s linear infinite;
`;
