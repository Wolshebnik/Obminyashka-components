import styled, { css } from 'styled-components';

export const InputDiv = styled.div<{ inputMB?: string, styleType?: string }>`
  position: relative;

    ${({ inputMB }) => css`
    margin-bottom: ${inputMB ? inputMB : '22px'};
    
    &:last-child {
     margin-bottom: ${inputMB ? inputMB : '30px'};
   }
    `}
`;

export const Label = styled.label<{ styleType: string }>`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  
  ${({ styleType }) => styleType === 'profile' && `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 10px;
  `}
`;

export const LabelSpan = styled.span<{ styleType: string }>`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  cursor: pointer;
  font-family: inherit;
  
  ${({ theme, styleType }) => css`
  color: ${theme.colors.colorGrey};
  ${styleType === 'profile' && `
   margin-top: -16px;     
   color:${theme.colors.blackColorText};   
   `};
  `}
`;

export const WrapperInputError = styled.div<{ labelSpanMB?: string }>`
  display: flex;
  flex-direction: column;
  ${({ labelSpanMB }) => labelSpanMB && `margin-top:${labelSpanMB}`}  
`;

export const InputAuth = styled.input<{ error?: string }>`
  padding: 12px 16px;
  width: 100%;
  border-radius: 2px;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  outline: none;

   ${({ theme, error }) => css`
   color: ${theme.colors.rightColorText};
   border: 1px solid ${error ? theme.colors.colorError : 'hsl(0, 0%, 74%)'};
  
    &:focus {
       border-color: ${error ? theme.colors.colorError : 'hsl(0, 0%, 44%)'};
     }
   `}
`;

export const Input = styled.input<{ error?: string }>`
  display: inline-flex;
  box-sizing: border-box;
  width: 415px;
  padding: 9px 16px 9px 16px;
  border: 1px solid #bcbcbc;
  border-radius: 2px;
  outline: none;
  font-size: 16px;
  line-height: 16px;
  font-family: inherit;

  ${({ theme, error }) => css`
    border: 1px solid ${error ? theme.colors.colorError : 'hsl(0, 0%, 74%)'};
    color: ${theme.colors.rightColorText};

    &:focus,
    &:hover {
      border-color: ${error ? theme.colors.colorError : 'hsl(0, 0%, 44%)'};
    }
     &::placeholder {
    color: ${({ theme }) => theme.colors.colorTextDisabled};
  }
 `}
`;

export const SpanError = styled.span<{ error?: string, styleType: string }>`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
 
  ${({ theme, error }) => css`
    ${InputAuth} {
      border-color: ${error && theme.colors.colorError};
    }
    
    color: ${theme.colors.colorError};
 `}
`;