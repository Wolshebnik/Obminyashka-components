import styled, { css } from 'styled-components';

import * as Animation from './animation';
import * as Image from 'components/img';

const cloudStyles = css`
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${Image.cloud});
`;

export const WrapperForClouds = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const FirstLeftCloud = styled.div`
  ${cloudStyles};

  top: 3%;
  left: -11%;
  width: 225px;
  height: 120px;
  animation: ${Animation.move1} 15s linear infinite;
`;

export const SecondSmallTopCloud = styled.div`
  ${cloudStyles};

  top: -6%;
  left: 29%;
  width: 120px;
  height: 65px;
  animation: ${Animation.move2} 15s linear infinite;
  z-index: -1;
`;

export const ThirdLeftCloud = styled.div`
  ${cloudStyles};

  top: 44%;
  left: -13%;
  width: 245px;
  height: 144px;
  animation: ${Animation.move3} 15s linear infinite;
`;

export const BottomLeftSmallCloud = styled.div`
  ${cloudStyles};

  top: 73%;
  left: -6%;
  width: 120px;
  height: 65px;
  animation: ${Animation.move4} 15s linear infinite;
`;

export const RightTopCloud = styled.div`
  ${cloudStyles};

  top: 12%;
  right: -11%;
  width: 230px;
  height: 130px;
  animation: ${Animation.move5} 15s linear infinite;
`;

export const RightMiddleCloud = styled.div`
  ${cloudStyles};

  top: -60%;
  right: 25%;
  width: 120px;
  height: 65px;
  animation: ${Animation.move6} 15s linear infinite;
  z-index: -1;
`;

export const RightBottomCloud = styled.div`
  ${cloudStyles};

  top: 65%;
  left: 100%;
  width: 120px;
  height: 60px;
  animation: ${Animation.move7} 15s linear infinite;
  z-index: -1;
`;

export const HappySun = styled.div`
  position: absolute;
  background-image: url(${Image.sun});
  background-repeat: no-repeat;
  background-size: cover;

  top: 6%;
  left: -8%;
  width: 145px;
  height: 145px;
  animation: ${Animation.move8} 15s linear infinite;
`;
