import styled, { css } from 'styled-components';

export const SwiperWrapper = styled.div``;

export const SwiperImage = styled.img`
  height: 140px;
  width: 140px;
  margin: 10px 0;
  object-fit: contain;

  /* ${({ small, selected }) => css`
    ${small &&
    css`
      height: 138px;
      width: 138px;
      margin: 0;
    `};

    border: ${selected ? '2px solid #fa9e25' : 'none'};

    :hover {
      box-shadow: 0 0 3px 2px rgba(48, 50, 50, 0.4);
      transform: scale(1.1);
    }
  `} */
`;

export const StoryWrapper = styled.div`
  max-width: 1830px;
`;
