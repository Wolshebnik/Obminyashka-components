import styled from 'styled-components';

export const WrapFiles = styled.div`
  margin-bottom: 100px;
`;

export const FileDescription = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.productOwnerData.text};
  font-weight: 400;
`;

export const WrapperFile = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Title = styled.div`
  margin-bottom: 25px;
  line-height: 16px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blackColorText};
`;
