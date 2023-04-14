import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const SwiperWrapper = styled.div`
  margin: 125px 0;
`;

export const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 426px;
  height: 310px;
`;

export const SlideLink = styled(Link)`
  position: relative;
  outline: none;
`;

export const SlideImage = styled.img`
  width: 426px;
  height: 310px;
`;

export const SlideText = styled.span`
  position: absolute;
  top: 22px;
  right: 22px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  line-height: 30px;

  :active {
    transform: scale(1.05);
  }
`;

export const SlideTitle = styled.b`
  color: ${({ theme }) => theme.colors.white};
  font-size: 45px;
  line-height: 55px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: Balsamiq Sans, cursive;
`;

export const StoryWrapper = styled.div`
  max-width: 1830px;
`;
