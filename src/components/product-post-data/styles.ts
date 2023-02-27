import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-bottom: 40px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.colorPopup};
  box-shadow: 0 0 40px ${({ theme }) => theme.colors.shadow};
  word-break: break-all;
`;

export const TitleContainer = styled.div`
  margin: 20px 0 0 30px;
`;

export const TitleH2 = styled.h2`
  font-family: Proxima Nova, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 22px;
  line-height: 40px;
`;

export const PostDataDescription = styled.div`
  margin: 20px 0 0 30px;
`;

export const PostDataDescriptionText = styled.p`
  font-family: Proxima Nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 26px;
`;

export const PostDataDescriptionSpan = styled.span`
  color: ${({ theme }) => theme.colors.colorGrey};
`;

export const PostDataDescriptionOl = styled.ol`
  margin-left: 10px !important;
  padding-right: 20px;
`;

export const PostDataDescriptionOlItem = styled.li`
  font-family: Proxima Nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
`;

export const ButtonContainer = styled.div`
  margin: 15px;
`;

export const PostDataBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const PostDataDescriptionUl = styled.ul`
  width: 150px;
`;

export const PostDataDescriptionUlItem = styled.li`
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 26px;
`;

export const OwnerAndPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 420px;
  height: 500px;
  margin: 0 auto;
`;
