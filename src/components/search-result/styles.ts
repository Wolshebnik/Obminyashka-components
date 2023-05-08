import styled, { css } from 'styled-components';

import { IWindowWidth } from './types';

export const displayStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  ${displayStyles}
`;

export const Wrapper = styled.div`
  max-width: 351px;
  max-height: 212px;
  color: ${({ theme }) => theme.colors.searchResult.white};

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      max-width: 875px;
      max-height: 490px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      max-width: 1455px;
      max-height: 880px;
    `}
  `}

  ${displayStyles};
`;

export const MainCloud = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    ${({ theme }) => theme.colors.searchResult.gradient}
  );

  ${displayStyles};
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 23%;
  flex-direction: column;
  z-index: 5;

  ${displayStyles}
`;

export const Title = styled.p<IWindowWidth>`
  margin-bottom: 11px;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  ${({ theme, windowWidth }) => css`
    ${theme.responsive.isTablet &&
    css`
      margin-bottom: 24px;
      font-size: 35px;
      line-height: 40px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin-bottom: 45px;
      font-size: 60px;
      line-height: 70px;
    `}

     ${windowWidth < 1700 &&
    theme.responsive.isDesktop &&
    css`
      margin-bottom: 35px;
      font-size: 50px;
      line-height: 58px;
    `}
  `}
`;

export const Text = styled.p<IWindowWidth>`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  ${({ theme, windowWidth }) => css`
    ${theme.responsive.isTablet &&
    css`
      font-size: 23px;
      line-height: 27px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      font-size: 40px;
      line-height: 47px;
    `}

    ${windowWidth < 1700 &&
    theme.responsive.isDesktop &&
    css`
      font-size: 30px;
      line-height: 34px;
    `}
  `}
`;

export const StyledImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  transform: scale(1.01);
  z-index: 15;
`;
