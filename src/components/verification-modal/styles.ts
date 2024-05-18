import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div<{ active: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(115, 181, 206, 0.4);
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;

  ${({ active }) => css`
    ${active &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
  `}
`;

export const ModalContent = styled.div<{ active: boolean }>`
  transform: scale(0.5);
  transition: 0.4s all;

  ${({ active }) => css`
    ${active &&
    css`
      transform: scale(1);
    `}
  `}
`;

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 345px;
  height: 250px;
  background-color: #ffffff;
  color: #29a5d4;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  z-index: 2;

  label {
    width: 89%;
    color: #8e8e8e;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      width: 545px;
      height: 390px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      width: 800px;
      height: 570px;
    `}
  `}
`;

export const Title = styled.div`
  padding: 25px 0 11px;
  text-transform: uppercase;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      padding: 58px 0 11px;
    `}
  `}
`;

export const Line = styled.div`
  height: 2px;
  background: #29a5d4;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      margin-top: 50px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin-top: 50px;
    `}
  `}
`;

export const BtnOpen = styled.div`
  padding: 8px 0;
  width: 263px;
  border-radius: 24px;
  background: #81cbde;
  color: white;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 75px;
  margin-top: 15px;

  ${({ theme }) => css`
    ${theme.responsive.isTablet &&
    css`
      margin-top: 75px;
    `}

    ${theme.responsive.isDesktop &&
    css`
      margin-top: 160px;
    `}
  `}
`;
