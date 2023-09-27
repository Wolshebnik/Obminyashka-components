import styled, { css } from 'styled-components';

import * as Animation from './animation';

const cloudStyles = css`
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const FirstCloud = styled.img`
  ${cloudStyles};

  top: 4%;
  left: 4%;
  width: 225px;
  height: 120px;
  animation: ${Animation.move1} 7s linear infinite;
`;

export const SecondCloud = styled.img`
  ${cloudStyles};

  top: 22%;
  left: 52%;
  width: 120px;
  height: 65px;
  animation: ${Animation.move2} 12s linear infinite;
`;

export const ThirdCloud = styled.img`
  ${cloudStyles};

  top: 12%;
  right: 6%;
  width: 230px;
  height: 130px;
  animation: ${Animation.move3} 7s linear infinite;
`;

export const FourthCloud = styled.img`
  ${cloudStyles};

  top: 35%;
  left: 20%;
  width: 250px;
  height: 135px;
  animation: ${Animation.move4} 7s linear infinite;
  z-index: -1;
`;

export const FifthCloud = styled.img`
  ${cloudStyles};

  top: 40%;
  left: 90%;
  width: 230px;
  height: 130px;
  animation: ${Animation.move5} 7s linear infinite;
  z-index: -1;
`;

export const SixthCloud = styled.img`
  ${cloudStyles};

  top: 80%;
  left: 82%;
  width: 200px;
  height: 110px;
  animation: ${Animation.move6} 7s linear infinite;
  z-index: -1;
`;

export const SeventhCloud = styled.img`
  ${cloudStyles};

  top: 64%;
  left: 8%;
  width: 115px;
  height: 65px;
  animation: ${Animation.move7} 7s linear infinite;
  z-index: -1;
`;
