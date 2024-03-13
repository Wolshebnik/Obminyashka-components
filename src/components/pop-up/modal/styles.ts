import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div<{ active: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
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
