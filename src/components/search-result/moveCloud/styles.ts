import styled, { keyframes, css } from 'styled-components';

import сloud from 'assets/img/cloud.png';

const moveClouds1 = keyframes`
  0% {
   left: 15%;
  }
  15.1% {
   opacity: 1;
   left: -5%;
  }
  15.2% {
   opacity: 0;
   left: -5%;
  }
  15.3% {
   opacity: 0;
   left: 95%;
  }
  15.4% {
   opacity: 1;
   left: 95%;
  }
  100% {
   left: 15%;
  }
`;

const moveClouds2 = keyframes`
  0% {
   right: 10%;
  }
  88% {
   opacity: 1;
   right: 100%;
  }
  88.1% {
   opacity: 0;
   right: 100%;
  }
  88.2% {
   opacity: 0;
   right: -2%;
  }
  88.3%{  
   opacity: 1;
   right: -2%;
  }
  100% {
   right: 10%;
  }
`;

const moveClouds3 = keyframes`
  0% {
   left: 28%;
  }
  20% {
  opacity: 1;
   left: 8%;
  }
  20.1% {
   opacity: 0;
   left: 8%;
  }
  20.9% {
   opacity: 0;
   left: 80%;
  }
  21%{
   opacity: 1;
   left: 80%;
  }
  100% {
   left: 28%;
  }
`;

const mainStyles = css`
  position: absolute;
  background-image: url(${сloud});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
`;

export const FirstCloud = styled.span`
  top: 30%;
  left: 15%;
  width: 121px;
  height: 66px;
  animation: ${moveClouds1} 30s linear infinite;

  ${mainStyles};
`;

export const SecondCloud = styled.span`
  bottom: 37%;
  right: 10%;
  width: 121px;
  height: 66px;
  animation: ${moveClouds2} 20s linear infinite;

  ${mainStyles};
`;

export const ThirdCloud = styled.span`
  bottom: 16%;
  left: 28%;
  width: 178px;
  height: 96px;
  animation: ${moveClouds3} 30s linear infinite;

  ${mainStyles};
`;
