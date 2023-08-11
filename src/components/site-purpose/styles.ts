import styled from 'styled-components';

import * as Image from 'components/img';

export const PresentSection = styled.section`
  position: relative;
  width: 100%;
  height: 1140px;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(136deg, #a3dee5 23.74%, #34a2ce 100%);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${Image.newMaskCloud});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
  }
`;

export const ContainerRainbowAnimation = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1830px;
`;

// export const ShowAnimation = styled.div<IAnimation>`
//   ${({ isHide, showRainbow }) => css`
//     animation: ${showRainbow && !isHide ? Animation.appearAnimation : 'none'} 2s
//       ease-in-out forwards;

//     ${isHide &&
//     css`
//       animation: ${showRainbow ? Animation.disappearAnimation : 'none'} 2s
//         ease-in-out forwards;
//     `}
//   `}
// `;
