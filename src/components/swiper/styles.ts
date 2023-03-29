import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const SwiperWrapper = styled.div`
  margin: 125px 0;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 426px !important;
    height: 310px !important;
    /* font-size: 18px;
    background: ${({ theme }) => theme.colors.white}; */
  }
`;

export const SlideLink = styled(Link)`
  position: relative;
  outline: none;
`;

export const SlideText = styled.span`
  position: absolute;
  top: 22px;
  right: 22px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  line-height: 24px;
  font-family: Roboto;

  :active {
    transform: scale(1.05);
  }
`;

export const SlideTitle = styled.b`
  color: ${({ theme }) => theme.colors.white};
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: Caveat;
`;

export const Wrapper = styled.div`
  max-width: 1830px;
`;
