import styled, { css } from 'styled-components';

import { IStyles } from './types';

export const SpanAdd = styled.span`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  transition-delay: 0.1s;

  &:after {
    transform: rotate(90deg);
  }

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.itemCard.borderCard};

    &:before,
    &:after {
      position: absolute;
      content: '';
      width: 35px;
      height: 3px;
      background-color: ${theme.colors.itemCard.borderCard};
      pointer-events: none;
    }
  `}
`;

export const FilesLabel = styled.label<IStyles>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;
  margin-bottom: 30px;
  width: 198px;
  height: 208px;
  border-radius: 19px;
  cursor: pointer;

  border: 2px dotted
    ${({ theme, error }) =>
      error ? theme.colors.colorError : theme.colors.itemCard.borderCard};

  &:hover {
    ${SpanAdd} {
      transform: scale(1.2);
    }
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  max-height: 100%;
  object-fit: cover;
  border-radius: 16px;
  font-size: 0;
`;

export const WrapFiles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 100px;
`;

export const WrapError = styled.div`
  position: absolute;
  top: 100%;
  pointer-events: none;
`;
