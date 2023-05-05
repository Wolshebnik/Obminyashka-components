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
  15.1% {
   opacity: 1;
   left: 0%;
  }
  15.2% {
   opacity: 0;
   left: 0%;
  }
  15.3% {
   opacity: 0;
   left: 93%;
  }
  15.4% {
   opacity: 1;
   left: 93%;
  }
  100% {
   left: 15%;
  }
`;

const moveClouds2 = keyframes`
  0% {
   right: 10%; 
  }
  90% {
   opacity: 1;
   right: 93%;
   transform:scale(1);
  }
    90.1% {
    transform:scale(0.5);
  }
 90.2% {
   opacity: 0;
   right: 93%;
   transform:scale(0.4);
  }
  90.3% {
   opacity: 0;
   right: 0%;
   transform:scale(1);
  }
 90.4%{  
   opacity: 1;
   right: 0%;
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
  animation: ${moveClouds2} 20s linear infinite;

  ${sizeCloud};
  ${mainStyles};
`;

export const ThirdCloud = styled.span`
  bottom: 9%;
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
