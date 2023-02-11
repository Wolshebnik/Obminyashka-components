import styled from 'styled-components';

export const WrapIcon = styled.div<{ topPosition?: string }>`
  position: absolute;
  display: flex;
  top: ${({ topPosition }) => topPosition || '13px'};
  right: 10px;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
`;
