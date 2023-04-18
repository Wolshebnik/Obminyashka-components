import styled, { css } from 'styled-components';

import { IStyles } from './types';

const WrapImage = styled.div<IStyles>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;
  margin-bottom: 30px;
  width: 198px;
  height: 208px;
  //TODO: fix
  border: 2px dotted #c4c4c4;
  border-radius: 19px;
  cursor: move;

  //TODO: fix
  background-color: ${({ theme }) => theme.colors.white};
  ${({ isRemove }) =>
    isRemove &&
    css`
      transform: scale(0);
      transition: ease-in-out 0.3s;
    `}
`;

const ImgPhoto = styled.img`
  width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 17px;
  font-size: 0;
`;

const SpanClose = styled.span`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  top: -7px;
  right: -7px;
  width: 30px;
  height: 30px;
  //TODO: fix
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  //TODO: fix
  border: 1px solid #bababa;
  transition: 0.3s ease-in-out;
  transition-delay: 0.1s;
  cursor: pointer;

  &:after,
  &:before {
    position: absolute;
    content: '';
    width: 1px;
    height: 15px;
    //TODO: fix
    background: #bababa;
  }
  &:before {
    transform: rotate(-45deg);
  }
  &:after {
    transform: rotate(45deg);
  }
  &:hover {
    transform: rotate(90deg);
  }
`;

export { WrapImage, SpanClose, ImgPhoto };
