import styled, { css } from 'styled-components';

import { IInput, ILabel, ILabelSpan, IWrapperInputError } from './types';

export const Label = styled.label<ILabel>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;

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
  display: inline-block;
  line-height: 16px;
  font-family: inherit;
  cursor: pointer;

  ${({
    theme,
    labelColor,
    labelFontSize,
    labelFontWeight,
    inputFlexDirection,
  }) => css`
    ${inputFlexDirection === 'row' && `margin-top: 18px;`}
    color: ${labelColor ? labelColor : theme.colors.input.textGrey};
    font-size: ${labelFontSize ? labelFontSize : '14px'};
    font-weight: ${labelFontWeight ? labelFontWeight : 400};
  `}
`;

export const WrapperSearchLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.input.searchBtn};
  border-radius: 20px;

  svg {
    width: 22px;
    height: 22px;

    :hover {
      width: 26px;
      height: 26px;
  }
`;

export const WrapperInputError = styled.div<IWrapperInputError>`
  position: relative;
  display: flex;
  flex-direction: column;

  ${({ wrapperInputErrorWidth, isTypeSearch }) => css`
    ${wrapperInputErrorWidth && `width: ${wrapperInputErrorWidth}`};
    ${isTypeSearch &&
    css`
      padding-right: 40px;
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

  ${({ theme, error, notPasswordType, isTypeSearch }) => css`
    padding: ${!notPasswordType ? `12px 40px 12px 12px` : `12px 16px `};
    color: ${theme.colors.input.textRight};
    border: 1px solid
      ${error ? theme.colors.input.error : theme.colors.input.border};

    &:focus {
      border-color: ${error
        ? theme.colors.input.error
        : theme.colors.input.focus};
    }

    ${isTypeSearch &&
    css`
      border: none;
      padding: 12px 0 12px 12px;
      font-style: italic;
      font-size: 16px;
      line-height: 24px;
    `}
  `}
`;

export const WrapperReset = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  transition: 0.33s;

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

export const SpanError = styled.span<{ error: string }>`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  ${({ theme, error }) => css`
    color: ${theme.colors.input.error};

    ${Input} {
      border-color: ${error && theme.colors.input.error};
    }
  `}
`;