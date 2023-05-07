import styled, { css } from 'styled-components';
import { IStyledButtonNew } from './types';

export const Button = styled.button<IStyledButtonNew>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 63px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  background: linear-gradient(45deg, #97c069 35%, #eefddc 50%, #97c069 65%);
  animation-name: background-green-animation;
  animation-duration: 1500ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes background-green-animation {
    0% {
      background-position: 0px 0;
    }
    100% {
      background-position: 290px 0;
    }
  }

  ${({ width }) =>
    css`
      width: ${width}px;
      @keyframes background-green-animation {
        0% {
          background-position: 0px 0;
        }
        100% {
          background-position: ${width}px 0;
        }
      }
    `}
`;

export const WrapIcon = styled.span``;
