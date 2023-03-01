import styled, { css } from 'styled-components';

import childrenImg from 'assets/img/children.png';

export const HelpChildren = styled.div`
  display: block;
  margin-bottom: 145px;
  padding: 45px 45px 60px;
  border-radius: 20px;

  ${({ theme }) => css`
    background: ${theme.colors.white} url(${childrenImg}) no-repeat bottom right;
  `}
`;

export const TitleWrapper = styled.div`
  padding-bottom: 36px;
`;

export const Text = styled.p`
  margin-bottom: 40px;
  width: 408px;
  font-size: 18px;
  line-height: 24px;
  font-family: Roboto;
  border-radius: 20px;
  backdrop-filter: blur(3px);

  ${({ theme }) => css`
    color: ${theme.colors.blackColorText};
    background-color: ${theme.colors.helpChildren.bg};
    box-shadow: 0 0 20px ${theme.colors.helpChildren.shadow};
  `}
`;

export const Strong = styled.strong`
  display: contents;
  font-weight: 700;
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

      :hover {
        background-color: ${theme.colors.btnBlueActive};
      }
    `}

    span {
      margin-right: 10px;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 1251px;
`;
