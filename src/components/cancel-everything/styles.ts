import styled from 'styled-components';

export const Cross = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  transition: all 0.4s ease-in-out;

  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 1px;
    height: 16px;
    background-color: black;
  }

  &::before {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const BackButtons = styled.div`
  display: flex;
  padding: 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    ${Cross} {
      transform: rotate(180deg);
    }
  }

  &:active {
    transform: scale(1.15);
  }
`;
