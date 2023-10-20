import styled, { css } from 'styled-components';

import * as Animation from './animation';

const cloudStyles = css`
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LeftWrapper = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
  bottom: 0;
  /* animation: ${Animation.moveLeftWrapper} 15s linear infinite; */
`;

export const RightWrapper = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  bottom: 0;
  right: 0;
  overflow: hidden;
  /* animation: ${Animation.moveRightWrapper} 15s linear infinite; */
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

  top: 12%;
  right: 5%;
  width: 120px;
  height: 65px;
  animation: ${Animation.move2} 15s linear infinite;
`;

export const ThirdLeftCloud = styled.img`
  ${cloudStyles};

  top: 44%;
  left: 10%;
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

  /* transform: translateX(100%); */
  animation: ${Animation.move5} 15s linear infinite;
`;

export const RightMiddleCloud = styled.img`
  ${cloudStyles};

  top: 30%;
  left: 23%;
  width: 120px;
  height: 65px;
  animation: ${Animation.move6} 15s linear infinite;
  z-index: -1;
`;

export const RightBottomCloud = styled.img`
  ${cloudStyles};

  top: 70%;
  left: 82%;
  width: 120px;
  height: 60px;
  animation: ${Animation.move7} 15s linear infinite;
  z-index: -1;
`;

export const HappySun = styled.img`
  ${cloudStyles}

  top: 6%;
  left: 20%;
  width: 145px;
  height: 145px;
`;
