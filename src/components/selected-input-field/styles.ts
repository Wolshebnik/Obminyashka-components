import styled from 'styled-components';

export const InputWrapper = styled.div<{ open: boolean }>`
  box-sizing: border-box;
  padding: ${({ open }) => (open ? '0 15px 27px' : '0 15px')};
  margin-right: 16px;
  width: 300px;
  border-radius: 5px;
  border: 2px dashed #7ecde4;
  background: #fff;
  transition: all 0.4s 0.2s ease;
`;

export const SelectInput = styled.input<{ open: boolean }>`
  box-sizing: border-box;
  padding: 10px 0;
  width: 100%;
  border: none;
  border-bottom: ${({ open }) => open && '2px solid #d1d1d1'};
  color: #777;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
  transition: all 0s ease;
`;

export const Scroll = styled.div<{ open: boolean }>`
  margin-top: ${({ open }) => open && '18px'};
  max-height: 160px;
  overflow-y: auto;
  transition: all 0.4s 0.2s ease;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
    border: 1px solid white;
    background: #d9d9d9;
  }

  &::-webkit-scrollbar-thumb {
    height: 100px;
    border-radius: 10px;
    background: #71c2da;
  }
`;

export const SelectItemWrapper = styled.div<{ open: boolean }>`
  box-sizing: border-box;
  max-height: ${({ open }) => (open ? '1000px' : '0')};
  transition: all 0.4s 0.2s ease;
`;

export const SelectItem = styled.div`
  margin: 16px 0;
  color: #777;
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
