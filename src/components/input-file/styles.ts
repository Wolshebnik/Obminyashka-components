import styled from 'styled-components';

import { IStyles } from './types';

export const SpanAdd = styled.span`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  //TODO: change colors
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
    //TODO: change colors
    background-color: #c4c4c4;
    pointer-events: none;
  }

  &:after {
    transform: rotate(90deg);
  }
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
  //TODO: change colors
  border: 2px dotted ${(p) => (p.error ? p.theme.colors.colorError : '#c4c4c4')};
  border-radius: 19px;
  cursor: pointer;

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
  width: 350px;
  height: 350px;
  max-height: 100%;
  object-fit: cover;
  border-radius: 16px;
  font-size: 0;
`;

export const WrapFiles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 100px;
`;

export const WrapError = styled.div`
  position: absolute;
  top: 100%;
  pointer-events: none;
`;
