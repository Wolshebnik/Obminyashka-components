import { keyframes } from 'styled-components';

export const FirstTopLeftCloud = keyframes`
  0% {
    opacity: 0;
  }

  23% {
    opacity: 0;
  }

  24% {
    opacity: 1;
    left: -20%;
    transform: scale(3.1);
  }

  27% {
    opacity: 1;
    left: 7%;
    transform: scale(1.1);
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

export const SecondTopLeftCloud = keyframes`
  0% {
    opacity: 0;
  }

  21% {
    opacity: 0;
  }

  22% {
    left: -20%;
    transform: scale(3.1);
    opacity: 1;
  }

  27% {
    opacity: 1;
    transform: scale(1.1);
    left: 15%;
  }
  
  69.9%{
    left: -2%;
    transform: scale(1.1);
  }

  73.9% {
    left: -20%;
    transform: scale(3.1);
    opacity: 1;
  }

  74%{
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

export const ThirdMiddleLeftCloud = keyframes`
  0% {
    opacity: 0;
  }

  23% {
    opacity: 0;
  }

  24% {
    opacity: 1;
    top: -10%;
    transform: scale(3.1);
  }

  27% {
    opacity: 1;
    transform: scale(1.1);
    top: 12%;
  }

  69.9% {
    left: 20%;
    transform: scale(1.1);
  }

  70% {
    top: 5%;
  }

  73.9% {
    top: -10%;
    transform: scale(3.1);
    opacity: 1;
  }
  
  74%{
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

export const BottomLeftCloud = keyframes`
  0% {
    opacity: 0;
  }

  21% {
    opacity: 0;
  }

  22% {
    left: -30%;
    transform: scale(4.1);
    opacity: 1;
  }

  27% {
    left: 15%;
    transform: scale(1.1);
    opacity: 1;
  }
  
  69.9% {
    left: -5%;
    transform: scale(1.1);
  }

  73.9% {
    left: -30%;
    transform: scale(4.1);
    opacity: 1;
  }

  74%{
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

export const RightTopCloud = keyframes`
  0% {
    opacity: 0;
  }

  21% {
    opacity: 0;
  }

  22% {
    right: -20%;
    transform: scale(3.1);
    opacity: 1;
  }

  27% {
    right: 1%;
    transform: scale(1.1);
  }

  69.9% {
    right: 15%;
    transform: scale(1.1);
  }

  73.9% {
    right: -20%;
    transform: scale(3.1);
    opacity: 1;
  }

  74% {
    opacity: 0;   
  }

  100% {
    opacity: 0;
  }
`;

export const RightMiddleCloud = keyframes`
  0% {
    opacity: 0;
  }

  21% {
    opacity: 0;
  }

  22% {
    top: -20%;
    transform: scale(3.1);
    opacity: 1;
  }
  
  27% {
    top: 30%;
    right: 30%;
    transform: scale(1.1);
  }

  69.9% {
    top: 30%;
    right: 40%;
    transform: scale(1.1);
  }

  73.9% {
    top: -20%;
    right: 30%;
    transform: scale(3.1);
    opacity: 1;
  }
  
  74% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

export const RightBottomCloud = keyframes`
  0% {
    opacity: 0;
  }

  21% {
    opacity: 0;
  }

  22% {
    right: -10%;
    transform: scale(3.1);
    opacity: 1;
  }

  27% {
    right: 2%;
    transform: scale(1.1);
    opacity: 1;
  }
  
  69.9% {
    right: 25%;
    transform: scale(1.1);
  }

  73.9% {
    right: -10%;
    transform: scale(3.1);
    opacity: 1;
  }

  74%{
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

export const SunDesktop = keyframes`
  0% {
    opacity: 0;
  }

  21% {
    opacity: 0;
  }

  22% {
    left: -20%;
    transform: scale(3.1);
    opacity: 1;
  }

  27% {
    opacity: 1;
    transform: scale(1.1);
    left: 12%;
  }

  41% {
    top: 6%;
    left: 14%;
    transform: rotate(15deg);
  }
  
  55% {
    top: 4%;
    left: 8%;
    transform: rotate(-15deg);
  }

  69.9% {
    top: 12%;
    left: 10%;
    transform: scale(1.1);
  }

  73.9% {
    left: -20%;
    transform: scale(3.1);
    opacity: 1;
  }

  74%{
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

export const SunMobile = keyframes`
  27% {
    top: 10%;
    left: 10%;
  }

  33% {
    left: 37%;
  }

  60% {
    left: 37%;
  }

  66% {
    left: 70%;
  }
  
  93% {
    left: 70%;
  }

  99% {
    left: 10%;
  }
`;

export const SunMobileBG = keyframes`
  27% {
    top: 10%;
    left: 10%;
  }

  33% {
    left: 42%;
  }

  60% {
    left: 42%;
  }

  66% {
    left: 80%;
  }
  
  93% {
    left: 80%;
  }

  99% {
    left: 10%;
  }
`;

export const FirstTopLeftCloudMobile = keyframes`
  0% {
    left: 2%;
  }

  13% {
    left: -13%;
    opacity: 1;
  }

  13.1% {
    left: -13%;
    opacity: 0;
  }

  13.2% {
    left: 100%;
    opacity: 0;
  }  

  13.3% {
    left: 100%;
    opacity: 1;
  }  

  100% {
    left: 2%;
  }
`;

export const SecondTopLeftCloudMobile = keyframes`
  0% {
    left: 27%;
  }

  27% {
    left: -7%;
    opacity: 1;
  }

  27.1% {
    left: -7%;
    opacity: 0;
  }

  27.2% {
    left: 100%;
    opacity: 0;
  }  

  27.3% {
    left: 100%;
    opacity: 1;
  }  

  100% {
    left: 27%;
  }
`;

export const ThirdMiddleLeftCloudMobile = keyframes`
  0% {
    left: -2%;
  }

  10% {
    left: -15%;
    opacity: 1;
  }

  10.1% {
    left: -15%;
    opacity: 0;
  }

  10.2% {
    left: 100%;
    opacity: 0;
  }  

  10.3% {
    left: 100%;
    opacity: 1;
  }  

  100% {
    left: -2%;
  }
`;

export const BottomLeftCloudMobile = keyframes`
  0% {
    left: 12%;
  }

  12% {
    left: -7%;
    opacity: 1;
  }

  12.1% {
    left: -7%;
    opacity: 0;
  }

  12.2% {
    left: 100%;
    opacity: 0;
  }  

  12.3% {
    left: 100%;
    opacity: 1;
  }  

  100% {
    left: 12%;
  }
`;

export const RightTopCloudMobile = keyframes`
  0% {
    right: 5%;
  }

  88% {
    right: 100%;
    opacity: 1;
  }

  88.1% {
    right: 100%;
    opacity: 0;
  }

  88.2% {
    right: -10%;
    opacity: 0;
  }  

  88.3% {
    right: -10%;
    opacity: 1;
  }  

  100% {
    right: 5%;
  }
`;

export const RightMiddleCloudMobile = keyframes`
  0% {
    right: 25%;
  }

  72% {
    right: 100%;
    opacity: 1;
  }

  72.1% {
    right: 100%;
    opacity: 0;
  }

  72.2% {
    right: -6%;
    opacity: 0;
  }  

  72.3% {
    right: -6%;
    opacity: 1;
  }  

  100% {
    right: 25%;
  }
`;

export const RightBottomCloudMobile = keyframes`
  0% {
    right: 1%;
  }

  95% {
    right: 100%;
    opacity: 1;
  }

  95.1% {
    right: 100%;
    opacity: 0;
  }

  95.2% {
    right: -6%;
    opacity: 0;
  }  

  95.3% {
    right: -6%;
    opacity: 1;
  }  

  100% {
    right: 1%;
  }
`;
