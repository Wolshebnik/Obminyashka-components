import styled, { css } from 'styled-components';

export const WrapCropSvg = styled.div`
  position: absolute;

  > svg {
    opacity: 0;
    transition: opacity 0.2s ease;
  }
`;

export const WrapAvatar = styled.label<{
  hasImage: boolean;
  showIcon: boolean | undefined;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 135px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s ease;

  path {
    transition: fill 0.3s ease;
  }

  svg:nth-child(2) {
    opacity: 1;
  }

  :hover {
    background-color: #cccccc;

    > svg:first-child {
      path {
        fill: #095972;
      }
    }

    ${({ hasImage }) =>
      hasImage &&
      css`
        opacity: 0.8;
      `}

    ${WrapCropSvg} {
      > svg {
        opacity: 1;
      }
    }
  }
`;

export const InputFile = styled.input`
  display: none;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 25px;
  padding: 40px 50px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: Roboto, sans-serif;

  div {
    text-align: center;
  }

  h2 {
    font: normal normal 600 20px/16px Roboto, sans-serif;
    text-align: center;
  }

  p {
    font: normal normal 600 16px/20px Roboto, sans-serif;
    color: ${({ theme }) => theme.colors.colorGrey};
  }
`;
