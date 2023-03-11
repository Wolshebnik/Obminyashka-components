import styled, { css } from 'styled-components';

import {
  IInput,
  ILabel,
  ILabelSpan,
  ISpanError,
  IWrapperInputError,
} from './types';

export const Label = styled.label<ILabel>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  overflow: hidden;

  input[type='text']::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  input[type='text']::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  ${({
    inputGap,
    isTypeSearch,
    inputMaxWidth,
    inputFlexDirection,
    inputJustifyContent,
  }) => css`
    flex-direction: ${inputFlexDirection && inputFlexDirection};
    justify-content: ${inputJustifyContent && inputJustifyContent};
    ${inputFlexDirection && `align-items: baseline;`}
    gap: ${inputGap && inputGap};
    max-width: ${inputMaxWidth && inputMaxWidth};

    ${isTypeSearch &&
    css`
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.colors.input.searchBorder};
      border-radius: 25px;
      box-sizing: border-box;
      outline: none;
    `}
  `}
`;

export const LabelSpan = styled.span<ILabelSpan>`
  line-height: 16px;
  font-family: inherit;
  cursor: pointer;

  ${({ theme, labelColor, labelFontSize, labelFontWeight }) => css`
    color: ${labelColor ? labelColor : theme.colors.input.textGrey};
    font-size: ${labelFontSize || '14px'};
    font-weight: ${labelFontWeight || 400};
  `};
`;

export const WrapperSearchLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-left: 1px;
  background-color: ${({ theme }) => theme.colors.input.searchBtn};
  border-radius: 20px;

  svg {
    width: 22px;
    height: 22px;
    transition: 0.33s;

    :hover {
      width: 26px;
      height: 26px;
      transition: 0.23s;
    }
  }
`;

export const InputIcon = styled.div`
  position: relative;
`;

export const WrapperInputError = styled.div<IWrapperInputError>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ wrapperInputErrorWidth, isTypeSearch, errorGap }) => css`
    ${errorGap && `gap:${errorGap};`}
    ${wrapperInputErrorWidth && `width: ${wrapperInputErrorWidth}`};
    ${isTypeSearch &&
    css`
      width: calc(100% - 50px);
    `}
  `}
`;

export const Input = styled.input<IInput>`
  width: 100%;
  border-radius: 2px;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  outline: none;

  ${({ theme, error, notPasswordType, isTypeSearch, inputHeight }) => css`
    height: ${inputHeight || '40px'};
    padding: ${!notPasswordType || isTypeSearch ? `0 40px 0 12px` : `0 16px `};
    color: ${theme.colors.input.textRight};
    border: 1px solid
      ${error ? theme.colors.input.error : theme.colors.input.border};

    &:focus,
    &:hover {
      border-color: ${error
        ? theme.colors.input.error
        : theme.colors.input.focus};
    }

    ${isTypeSearch &&
    css`
      border: none;
      font-style: italic;
    `}
  `}
`;

export const WrapperReset = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  display: flex;
  cursor: pointer;
  transition: 0.33s;
  transform: translateY(-50%);

  svg {
    width: 24px;
    height: 24px;

    :hover {
      transition: 0.33s;

      path {
        fill: ${({ theme }) => theme.colors.input.searchBtn};
      }
    }
  }
`;

export const SpanError = styled.span<ISpanError>`
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  ${({ theme, error, errorFontSize }) => css`
    font-size: ${errorFontSize || '12px'};
    color: ${theme.colors.input.error};

    ${Input} {
      border-color: ${error && theme.colors.input.error};
    }
  `}
`;
