import styled from 'styled-components';

import { IStyles } from './types';

export const FilesLabel = styled.label<IStyles>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;
  margin-bottom: 30px;
  width: 198px;
  height: 208px;
  border: 2px dotted ${(p) => (p.error ? p.theme.colors.colorError : '#c4c4c4')};
  border-radius: 19px;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;
export const WrapError = styled.div`
  position: absolute;
  top: 100%;
`;
export const SpanAdd = styled.span`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: 1px solid #c4c4c4;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  transition-delay: 0.1s;

  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 35px;
    height: 3px;
    background-color: #c4c4c4;
  }
  &:after {
    transform: rotate(90deg);
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export const SpanClose = styled.span`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  top: -7px;
  right: -7px;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  border: 1px solid #bababa;
  transition: 0.3s ease-in-out;
  transition-delay: 0.1s;
  cursor: pointer;

  &:after,
  &:before {
    position: absolute;
    content: '';
    width: 1px;
    height: 15px;
    background: #bababa;
  }
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

export const Image = styled.img`
  width: 100px;
  height: 100px;
  max-height: 100%;
  object-fit: cover;
  border-radius: 17px;
  font-size: 0;
`;
export const WrapFiles = styled.div`
  margin-bottom: 100px;
`;
