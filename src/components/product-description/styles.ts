import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 220px;

  ${({ theme }) => css`
    background: ${theme.colors.backgroundColor};
    box-shadow: 0 0 40px ${theme.colors.shadow};
  `}
`;

export const TitleContainer = styled.div`
  margin-top: 20px;
  margin-left: 34px;
`;

export const Title = styled.h2`
  font-size: 26px;
  line-height: 40px;
`;

export const DescriptionContainer = styled.div`
  margin: 20px 34px 34px;
  word-break: break-all;
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  line-height: 26px;
`;

export const Wrapper = styled.div`
  max-width: 1251px;
`;
