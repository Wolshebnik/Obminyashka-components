import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.productOwnerData.bg};
  padding-bottom: 15px;
`;

export const ProductOwner = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const ProductOwnerAvatar = styled.div`
  padding: 35px 15px 20px 35px;
`;

export const ProductOwnerName = styled.div`
  padding-top: 30px;
`;

export const ProductOwnerTitleH2 = styled.h2`
  font-weight: 600;
  font-style: normal;
  font-size: 22px;
  line-height: 40px;
`;

export const PostData = styled.div`
  display: flex;
`;

export const PostReqData = styled.div`
  width: 170px;
  padding: 5px 20px 15px 30px;
`;

export const PostResData = styled.div`
  padding: 5px 20px 15px 30px;
`;

export const PostReqDataBlock = styled.div`
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 26px;
`;

export const PostReqDataText = styled.div<{ color?: string }>`
  white-space: nowrap;

  ${({ theme, color }) => css`
    color: ${color ? color : theme.colors.productOwnerData.text};
  `};
`;
