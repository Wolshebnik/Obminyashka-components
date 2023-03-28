import styled from 'styled-components';

export const WrapFiles = styled.div`
  margin-bottom: 100px;
`;

export const FileTittle = styled.h3`
  font-weight: 600;
  color: #11171f;
  font-size: 26px;
  line-height: 40px;
`;

export const Star = styled.span`
  color: ${({ theme }) => theme.colors.colorRed};
`;

export const FileDescription = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: #8f8f8f;
  font-weight: 400;
`;

export const WrapperFile = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
