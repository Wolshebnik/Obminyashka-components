import styled, { css } from 'styled-components';

const textStyles = css`
  font-size: 35px;
  font-weight: 400;
  text-align: center;
  line-height: normal;
  color: ${({ theme }) => theme.colors.white};
`;

export const FeaturesSection = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const FirstFeatures = styled.div``;

export const Furniture = styled.img`
  position: absolute;
  top: 32%;
  left: 19%;
  width: 276px;
  height: 332px;
`;

export const ThingsText = styled.p`
  ${textStyles};

  position: absolute;
  top: 63%;
  left: 24%;
  width: 280px;
  height: 122px;
  z-index: 1;
`;

export const FirstKeg = styled.img`
  position: absolute;
  top: 74%;
  left: 20%;
  width: 428px;
  height: 220px;
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
`;

export const SecondKeg = styled.img`
  position: absolute;
  top: 67%;
  left: 40%;
  width: 428px;
  height: 300px;
  z-index: -1;
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
`;

export const ThirdKeg = styled.img`
  position: absolute;
  top: 72%;
  left: 61%;
  width: 428px;
  height: 220px;
`;
