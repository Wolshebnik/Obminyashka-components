import styled, { css } from 'styled-components';

export const Child = styled.div<{
  isOpen?: boolean;
  isCloseAnimation?: boolean;
}>`
  position: relative;
  top: -10%;
  left: 50%;
  padding: 20px;
  max-width: 500px;
  min-height: 50px;
  text-align: center;
  border: 1px solid black;
  background-color: grey;
  transform: translate(-50%, -50%);
  transition: all 0.8s ease-in-out;

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

  ${({ isOpen, isCloseAnimation }) => css`
    ${isOpen &&
    css`
      top: 50%;
    `}
    ${isCloseAnimation &&
    css`
      top: 120%;
    `}
  `};
`;
