import styled, { css } from 'styled-components';

const getSize = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `;

    case 'large':
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;

    default:
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;
  }
};

export const StyledButton = styled.button`
  display: inline-block;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  line-height: 1;

  ${({
    size,
    styleType,
  }: {
    styleType: 'primary' | 'secondary';
    size: 'small' | 'medium' | 'large';
  }) => css`
    ${styleType === 'primary' &&
    css`
      color: white;
      background-color: #1ea7fd;
    `}

    ${styleType === 'secondary' &&
    css`
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    `}

    ${getSize(size)}
  `}
`;
