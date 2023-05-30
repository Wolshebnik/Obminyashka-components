import styled, { css, keyframes } from 'styled-components';

const moveDown = keyframes`
  from {
  top: -100%;
  }

  to {
  top: 50%;
  }
`;

const moveBelow = keyframes`
  from {
  top: 50%;
  }

  to {
  top: 200%;
  }
`;

export const Child = styled.div<{
  duration: number;
  isCloseAnimation?: boolean;
}>`
  position: relative;
  top: 50%;
  left: 50%;
  padding: 20px;
  max-width: 500px;
  min-height: 50px;
  text-align: center;
  border: 1px solid black;
  background-color: grey;
  transform: translate(-50%, -50%);
  button {
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    line-height: 0;
    border-radius: 25px;
    background-color: white;
    transform: translate(calc(50% - 5px), -50%);
    transition: all 0.33s ease-in;
    cursor: pointer;

    svg {
      width: 15px;
      height: 18px;

      path {
        fill: black;
      }
    }

    &:hover,
    &:focus {
      background-color: red;
    }
  }

  p {
    margin: 10px 0;
  }

  input {
    display: block;
    width: 100%;
    margin: 10px 0;
  }

  ${({ isCloseAnimation, duration }) => css`
    animation: ${isCloseAnimation ? moveDown : moveBelow} ${duration}ms linear;
  `};
`;
