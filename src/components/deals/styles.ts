import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const WrapperWithLink = styled(Link)<{ inFooterOAuth?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const PuzzleIconWrapper = styled.div`
  margin-right: 10px;
`;

export const HeartIconWrapper = styled.div`
  display: flex;
  order: 1;
  margin-left: 5px;

  & > svg {
    width: 16px;
    height: 16px;
  }

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      margin-left: 10px;
      order: 1;

      & > svg {
        width: 22px;
        height: 22px;
      }
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin-right: 12px;
      order: 0;

      & > svg {
        width: 20px;
        height: 20px;
      }
    `}
  `}
`;

export const Text = styled.div`
  width: fit-content;
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  font-style: normal;
  text-transform: uppercase;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      font-size: 22px;
      font-weight: 400;
    `}

    ${theme.responsive.isDesktop &&
    css`
      font-size: 18px;
      font-weight: 400;
    `}
  `}
`;

export const WrapperWithBackground = styled(Link)<{ inFooterOAuth?: boolean }>`
  ${({ theme, inFooterOAuth }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 20px;
    width: 188px;
    background-color: ${theme.colors.dealsColors.white};
    color: ${theme.colors.newTextColors.blueColorText};
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;

    ${inFooterOAuth &&
    css`
      background-color: ${theme.colors.dealsColors.aquamarineBlue};
      color: ${theme.colors.dealsColors.white};
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 210px;
      padding: 8px 30px 8px 12px;
    `}

    & > ${HeartIconWrapper} {
      margin-right: 8px;
      margin-left: 0;
      order: 0;

      & > svg {
        width: 15px;
        height: 15px;
      }

      ${theme.responsive.isTablet &&
      css`
        & > svg {
          width: 15px;
          height: 15px;
        }
      `}

      ${theme.responsive.isDesktop &&
      css`
        margin-right: 25px;

        & > svg {
          width: 15px;
          height: 15px;
        }
      `}
    }

    & > ${Text} {
      font-size: 16px;
      font-weight: 400;
    }
  `}
`;
