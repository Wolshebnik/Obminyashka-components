import styled, { keyframes, css } from 'styled-components';

import { cloud } from 'components/img';

const sizeCloud = css`
  width: 29px;
  height: 16px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 71px;
      height: 38px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 121px;
      height: 66px;
    `}
  `}
`;

const moveClouds1 = keyframes`
  0% {
   left: 15%;
  }
  14%{
   left: 1%;
   opacity: 1;
   transform:scale(1);
  }
  15.1% {
   left: 0%;
   opacity: 1;
   transform:scale(0);
  }
  15.2% {
   left: 0%;
   opacity: 0;
  }
  15.3% {
   left: 93%;
   opacity: 0;
   transform:scale(1);
  }
  15.4% {
   left: 93%;
   opacity: 1;
  }
  100% {
   left: 15%;
  }
`;

const moveClouds2 = keyframes`
  0% {
   right: 10%; 
  }
  85% {
   right: 92.7%;
   opacity: 1;
   transform:scale(1);
  }
  86% {
   right: 92.7%;
   opacity: 0;
   transform:scale(0.1);
  }
  87% {
   right: 94%;
   opacity: 0;
   transform:scale(0);
  }
  88% {
   right: -2%;
   opacity: 0;
   transform:scale(1);
  }
  90%{  
   right: 0;
   opacity: 1;
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
   left: 8%;
   opacity: 1;
  }
  20.1% {
   left: 8%;
   opacity: 0;
  }
  20.9% {
   left: 80%;
   opacity: 0;
  }
  21%{
   left: 80%;
   opacity: 1;
  }
  100% {
   left: 28%;
  }
`;

const mainStyles = css`
  position: absolute;
  background-image: url(${cloud});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
`;

export const FirstCloud = styled.span`
  top: 30%;
  left: 15%;
  animation: ${moveClouds1} 30s linear infinite;

  ${sizeCloud};
  ${mainStyles};
`;

export const SecondCloud = styled.span`
  bottom: 30%;
  right: 10%;
  animation: ${moveClouds2} 23s linear infinite;

  ${sizeCloud};
  ${mainStyles};
`;

export const ThirdCloud = styled.span`
  bottom: 8%;
  left: 28%;
  width: 43px;
  height: 23px;
  animation: ${moveClouds3} 30s linear infinite;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 113px;
      height: 61px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 178px;
      height: 96px;
    `}
  `}

  ${mainStyles};
`;
