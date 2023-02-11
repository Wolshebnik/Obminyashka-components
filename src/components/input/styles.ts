import styled, { css } from 'styled-components';

export const Label = styled.label<{
  inputGap?: string;
  inputMaxWidth?: string;
  inputFlexDirection?: string;
  inputJustifyContent?: string;
}>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;

  ${({
    inputGap,
    inputMaxWidth,
    inputFlexDirection,
    inputJustifyContent,
  }) => css`
    flex-direction: ${inputFlexDirection && inputFlexDirection};
    justify-content: ${inputJustifyContent && inputJustifyContent};
    gap: ${inputGap && inputGap};
    max-width: ${inputMaxWidth && inputMaxWidth};
  `}
`;

export const LabelSpan = styled.span<{
  labelColor?: string;
  labelFontSize?: string;
  labelFontWeight?: number;
  inputFlexDirection?: string;
}>`
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

export const WrapperInputError = styled.div<{
  wrapperInputErrorWidth?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;

  ${({ wrapperInputErrorWidth }) => css`
    ${wrapperInputErrorWidth && `width: ${wrapperInputErrorWidth}`};
  `}
`;

export const Input = styled.input<{
  error?: string;
  disableUnderline?: boolean;
  notPasswordType: boolean;
}>`
  width: 100%;

  border-radius: 2px;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  outline: none;

  ${({ theme, error, notPasswordType }) => css`
    color: ${theme.colors.input.textRight};
    padding: ${!notPasswordType ? `12px 40px 12px 12px` : `12px 16px `};
    border: 1px solid
      ${error ? theme.colors.input.error : theme.colors.input.border};

    &:focus {
      border-color: ${error
        ? theme.colors.input.error
        : theme.colors.input.focus};
    }
  `}
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
