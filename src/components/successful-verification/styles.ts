import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

export const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  background: linear-gradient(105.33deg, #97d7e3 21.37%, #39a5cf 113.49%);
  overflow: hidden;
`;

export const Title = styled.div`
  margin-top: 44px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  z-index: 2;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      margin-top: 106px;
      font-size: 34px;
      line-height: 39px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      margin-top: 114px;
    `}

    ${theme.responsive.isTabletBG &&
    css`
      margin-top: 114px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin-top: 155px;
      font-size: 60px;
      line-height: 70px;
    `}
  `}
`;

export const NameWebsite = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  z-index: 2;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      font-size: 34px;
      line-height: 40px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      font-size: 60px;
      line-height: 70px;
    `}
  `}
`;

export const Text = styled.div`
  margin-top: 24px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
  z-index: 2;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      margin-top: 37px;
      font-size: 22px;
      line-height: 26px;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      margin-top: 25px;
    `}

    ${theme.responsive.isTabletBG &&
    css`
      margin-top: 25px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin-top: 55px;
      font-size: 40px;
      line-height: 47px;
    `}
  `}
`;

export const PhotoWrapper = styled.div`
  position: relative;
  margin: 19px 0;
  z-index: 2;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      margin-top: 50px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin-top: 29px;
    `}
  `}
`;

export const PhotoCartoon = styled.img`
  width: 158px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 254px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 460px;
    `}
  `}
`;

export const Btn = styled(Link)`
  padding: 8px 0;
  margin-bottom: 68px;
  width: 263px;
  border-radius: 24px;
  background: white;
  color: #81cbde;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  z-index: 2;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      padding: 13px 0;
      margin-bottom: 56px;
      width: 290px;
      text-transform: none;
    `}

    ${theme.responsive.isTablet &&
    theme.responsive.isLandscape &&
    css`
      margin-bottom: 60px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin-bottom: 80px;
    `}
  `}
`;
