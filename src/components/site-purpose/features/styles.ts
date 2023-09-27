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
  /* bottom: -100%; */
  bottom: 0;
  width: 100%;
  height: 100%;
  /* animation: ${Animation.featuresAnimation} 15s infinite; */
`;

export const FirstFeatures = styled.div``;

export const Furniture = styled.img`
  position: absolute;
  top: 32%;
  left: 19%;
  width: 276px;
  height: 332px;
`;

// export const FirstBlock = styled.div`
//   position: absolute;
//   bottom: 104px;
//   left: 20%;
//   width: 428px;
//   height: 342px;
// `;

export const ThingsText = styled.p`
  ${textStyles};

  position: absolute;
  top: 63%;
  left: 24%;
  width: 280px;
  height: 122px;
  z-index: 1;
  animation: ${Animation.stretchAndFall} 0.5s forwards;
  /* position: relative;
  top: 0;
  left: 24%;
  width: 280px;
  height: 122px;
  z-index: 1; */
`;

export const FirstKeg = styled.img`
  position: absolute;
  top: 74%;
  left: 20%;
  width: 428px;
  height: 220px;
  animation: ${Animation.stretchAndFall} 0.5s forwards;
  /* position: absolute;
  top: 140px;
  left: 7%;
  width: 280px;
  height: 122px;
  z-index: 1; */
`;

export const SecondFeatures = styled.div``;

export const Laptop = styled.img`
  position: absolute;
  top: 26%;
  left: 42%;
  width: 318px;
  height: 270px;
`;

export const RegText = styled.p`
  ${textStyles};

  position: absolute;
  top: 56%;
  left: 41%;
  width: 370px;
  height: 124px;
  animation: ${Animation.stretchAndFall} 0.5s forwards 0.5s;
`;

export const SecondKeg = styled.img`
  position: absolute;
  top: 67%;
  left: 40%;
  width: 428px;
  height: 300px;
  z-index: -1;
  animation: ${Animation.stretchAndFall} 0.5s forwards 0.5s;
`;

export const ThirdFeatures = styled.div``;

export const Toys = styled.img`
  position: absolute;
  top: 30%;
  left: 69%;
  width: 273px;
  height: 235px;
`;

export const TradeText = styled.p`
  ${textStyles};

  position: absolute;
  left: 62%;
  top: 57%;
  width: 383px;
  height: 157px;
  animation: ${Animation.stretchAndFall} 0.5s forwards 1s;
`;

export const ThirdKeg = styled.img`
  position: absolute;
  top: 72%;
  left: 61%;
  width: 428px;
  height: 220px;
  animation: ${Animation.stretchAndFall} 0.5s forwards 1s;
`;
