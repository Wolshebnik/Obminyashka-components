import styled, { css } from 'styled-components';

import * as Animation from '../animation';

const textStyles = css`
  font-size: 35px;
  font-weight: 400;
  text-align: center;
  line-height: normal;
  color: ${({ theme }) => theme.colors.white};
`;

export const FeaturesSection = styled.div`
  position: absolute;
  bottom: -100%;
  /* bottom: 0; */
  width: 100%;
  height: 100%;
  animation: ${Animation.featuresAnimation} 15s infinite;
`;

export const FirstFeatures = styled.div`
  /* position: absolute;
  bottom: -100%;
  animation: ${Animation.featuresAnimation} 15s infinite; */
`;

export const Furniture = styled.img`
  position: absolute;
  top: 32%;
  left: 19%;
  width: 276px;
  height: 332px;
  animation: ${Animation.appearanceFirstImages} 15s infinite;
`;

export const FirstBlock = styled.div`
  position: absolute;
  /* bottom: -100%; */
  bottom: 104px;
  left: 20%;
  width: 428px;
  height: 342px;
  animation: ${Animation.stretchFirstColumn} 15s infinite;
`;

export const ThingsText = styled.p`
  ${textStyles};

  position: relative;
  top: 0;
  left: 24%;
  width: 280px;
  height: 122px;
  z-index: 1;
`;

export const FirstKeg = styled.img`
  position: absolute;
  top: 140px;
  left: 0%;
`;

export const SecondFeatures = styled.div``;

export const Laptop = styled.img`
  position: absolute;
  top: 26%;
  left: 42%;
  width: 318px;
  height: 270px;
  animation: ${Animation.appearanceSecondImages} 15s infinite;
`;

export const SecondBlock = styled.div`
  position: absolute;
  top: 67%;
  left: 40%;
  width: 428px;
  height: 342px;
  animation: ${Animation.stretchSecondColumn} 15s infinite;
`;

export const RegText = styled.p`
  ${textStyles};

  position: absolute;
  top: -36%;
  left: 6%;
  width: 370px;
  height: 124px;
`;

export const SecondKeg = styled.img`
  position: absolute;
  z-index: -1;
`;

export const ThirdFeatures = styled.div``;

export const Toys = styled.img`
  position: absolute;
  top: 30%;
  left: 69%;
  width: 273px;
  height: 235px;
  animation: ${Animation.appearanceThirdImages} 15s infinite;
`;

export const ThirdBlock = styled.div`
  position: absolute;
  top: 72%;
  left: 61%;
  width: 428px;
  height: 342px;
  animation: ${Animation.stretchThirdColumn} 15s infinite;
`;

export const TradeText = styled.p`
  ${textStyles};

  position: absolute;
  left: 7%;
  bottom: 103%;
  width: 383px;
  height: 157px;
`;

export const ThirdKeg = styled.img`
  position: absolute;
`;
