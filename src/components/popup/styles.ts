import styled, { keyframes } from 'styled-components';

const appereance = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  background-color: ${({ theme }) => theme.colors.modalColors.background};
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 200ms;
  z-index: 99999;

  animation: ${appereance} 250ms linear forwards;
`;

export const ModalWindow = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  min-height: 250px;
  max-height: 80%;
  max-width: 600px;
  box-shadow: rgba(18, 182, 237, 0.3) 0px 3px 10px -0.5px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  z-index: 30;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  cursor: pointer;
`;

export const Cross = styled.span`
  position: absolute;
  top: -25px;
  width: 30px;
  height: 30px;
  right: -25px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.colors.modalColors.crossBtnBackground};
  transition: 0.3s ease-in-out;
  transition-delay: 0.1s;

  ::after,
  ::before {
    position: absolute;
    top: 7px;
    width: 1px;
    content: '';
    height: 15px;
    background-color: ${({ theme }) => theme.colors.modalColors.cross};
  }
  ::before {
    transform: rotate(45deg);
  }
  ::after {
    transform: rotate(135deg);
  }
  &:hover {
    transform: rotate(180deg);
  }
`;
