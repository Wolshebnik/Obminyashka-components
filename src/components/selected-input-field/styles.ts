import styled, { css } from 'styled-components';

export const InputWrapper = styled.div<{ open: boolean }>`
  box-sizing: border-box;
  margin-right: 16px;
  width: 300px;
  border-radius: 5px;
  transition: all 0.4s 0.2s ease;

  ${({ theme, open }) => css`
    background: ${theme.colors.white};
    padding: ${open ? '0 15px 27px' : '0 15px'};
    border: 2px dashed ${theme.colors.categoryFilter.locationBorder};
  `}
`;

export const SelectInput = styled.input<{ open: boolean }>`
  box-sizing: border-box;
  padding: 10px 0;
  width: 100%;
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
  transition: all 0s ease;

  ${({ theme, open }) => css`
    border-bottom: ${open &&
    `2px solid ${theme.colors.categoryFilter.inputBorderBottom}`};
    color: ${theme.colors.colorGrey};

    &:disabled {
      opacity: 0.5;
    }
  `}
`;

export const Scroll = styled.div<{ open: boolean }>`
  max-height: 160px;
  overflow-y: auto;
  transition: all 0.4s 0.2s ease;

  ${({ theme, open }) => css`
    margin-top: ${open && '18px'};

    &::-webkit-scrollbar {
      width: 5px;
      border-radius: 10px;
      border: 1px solid white;
      background: ${theme.colors.categoryFilter.scrollBgGrey};
    }

    &::-webkit-scrollbar-thumb {
      height: 100px;
      border-radius: 10px;
      background: ${theme.colors.categoryFilter.scrollBgBlue};
    }
  `}
`;

export const SelectItemWrapper = styled.div<{ open: boolean }>`
  box-sizing: border-box;
  max-height: ${({ open }) => (open ? '1000px' : '0')};
  transition: all 0.4s 0.2s ease;
`;

export const SelectItem = styled.div`
  margin: 16px 0;
  color: ${({ theme }) => theme.colors.colorGrey};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
