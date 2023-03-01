import styled, { css } from 'styled-components';

import childrenImg from 'assets/img/children.png';

export const HelpChildren = styled.div`
  display: block;
  border-radius: 20px;
  margin-bottom: 145px;
  padding: 45px 45px 60px;

  ${({ theme }) => css`
    background: ${theme.colors.white} url(${childrenImg}) no-repeat bottom right;
  `}

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 980px) {
    display: block;
  }
`;

export const HelpChildrenTitleH3 = styled.h3`
  font-size: 50px;
  line-height: 24px;
  font-family: Caveat;
  padding-bottom: 36px;

  ${({ theme }) => css`
    background: ${theme.colors.btnBlue};
  `}
`;

export const HelpChildrenText = styled.p`
  width: 408px;
  font-size: 18px;
  line-height: 24px;
  font-family: Roboto;
  border-radius: 20px;
  margin-bottom: 40px;
  backdrop-filter: blur(3px);

  ${({ theme }) => css`
    color: ${theme.colors.blackColorText};
    box-shadow: 0 0 20px ${theme.colors.shadow};
    background-color: ${theme.colors.darkShadow};
  `}

  @media (min-width: 980px) {
    width: 250px;
  }

  @media (min-width: 1140px) {
    width: 408px;
  }
`;

export const Strong = styled.strong`
  font-weight: 700;
  display: contents;
  line-height: 15px;
  text-decoration: none;

  ${({ theme }) => css`
    color: ${theme.colors.activeColor};
  `}
`;

export const StylizedBtn = styled.div`
  button {
    gap: 0;
    width: inherit;
    height: inherit;
    padding: 16px 50px;
    font-size: 18px;
    border-radius: 30px;

    ${({ theme }) => css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.activeColor};
    `}

    span {
      margin-right: 10px;
    }

    svg {
      width: 18px;
      height: 18px;
    }

    :hover {
      ${({ theme }) => css`
        background-color: ${theme.colors.btnBlueActive};
      `}
    }
  }
`;

export const TitleWrapper = styled.div`
  padding-bottom: 36px;
`;

export const Wrapper = styled.div`
  max-width: 1251px;
`;
