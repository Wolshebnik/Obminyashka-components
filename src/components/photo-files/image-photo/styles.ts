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
  border-radius: 19px;
  cursor: move;

  ${({ theme, isRemove }) => css`
    background-color: ${theme.colors.white};
    border: 2px dotted ${theme.colors.itemCard.borderCard};

    ${isRemove &&
    css`
      transform: scale(0);
      transition: ease-in-out 0.3s;
    `};
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
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  transition-delay: 0.1s;
  cursor: pointer;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.faux};

    &:after,
    &:before {
      position: absolute;
      content: '';
      width: 1px;
      height: 15px;
      background: ${theme.colors.faux};
    }
  `}

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
