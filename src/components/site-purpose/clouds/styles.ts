import styled, { css } from 'styled-components';

import * as Animation from './animation';

const cloudStyles = css`
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WrapperForClouds = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const FirstLeftCloud = styled.img`
  ${cloudStyles};

  top: 3%;
  left: -7%;
  width: 225px;
  height: 120px;
  animation: ${Animation.move1} 15s linear infinite;
`;

export const SecondSmallTopCloud = styled.img`
  ${cloudStyles};

  top: -6%;
  left: 29%;
  width: 120px;
  height: 65px;
  animation: ${Animation.move2} 15s linear infinite;
  z-index: -1;
`;

export const ThirdLeftCloud = styled.img`
  ${cloudStyles};

  top: 44%;
  left: 0;
  width: 226px;
  height: 144px;
  animation: ${Animation.move3} 15s linear infinite;
`;

export const BottomLeftSmallCloud = styled.img`
  ${cloudStyles};

  top: 73%;
  left: 28%;
  width: 120px;
  height: 65px;
  animation: ${Animation.move4} 15s linear infinite;
`;

export const RightTopCloud = styled.img`
  ${cloudStyles};

  top: 12%;
  right: -5%;
  width: 230px;
  height: 130px;

  animation: ${Animation.move5} 15s linear infinite;
`;

export const RightMiddleCloud = styled.img`
  ${cloudStyles};

  top: 30%;
  right: 25%;
  width: 120px;
  height: 65px;
  animation: ${Animation.move6} 15s linear infinite;
  z-index: -1;
`;

export const RightBottomCloud = styled.img`
  ${cloudStyles};

  top: 70%;
  left: 100%;
  width: 120px;
  height: 60px;
  animation: ${Animation.move7} 15s linear infinite;
  z-index: -1;
`;

export const HappySun = styled.img`
  ${cloudStyles}

  top: 6%;
  left: -8%;
  width: 145px;
  height: 145px;
  animation: ${Animation.move8} 15s linear infinite;
`;
