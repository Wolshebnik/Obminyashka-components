import styled from 'styled-components';

import { IBurger } from './types';

export const BurgerMenu = styled.div`
  position: fixed;
  top: 26px;
  right: 15px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const BurgerMenuLines = styled.div<IBurger>`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.btnBlue};
  border-radius: 15px;
  transform-origin: 1px;
  transition: all 0.3s linear;

  :nth-child(1) {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;
