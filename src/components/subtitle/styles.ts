import styled from 'styled-components';

export const TitleH3 = styled.h3`
  margin-bottom: 10px;
  font-family: 'Open Sans', sans-serif;
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blackColorText};
  line-height: 40px;
`;

export const Star = styled.span`
  color: ${({ theme }) => theme.colors.colorRed};
`;
