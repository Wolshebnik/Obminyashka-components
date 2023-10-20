import styled from 'styled-components';

import * as Image from 'components/img';
import * as Animation from './animation';

export const PresentSection = styled.section`
  position: relative;
  width: 100%;
  height: 1140px;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(136deg, #a3dee5 23.74%, #34a2ce 100%);
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    background-image: url(${Image.newMaskCloud});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    z-index: 5;
  }
`;

export const ContainerRainbowAnimation = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1830px;
  height: 100%;
  animation: ${Animation.cycledAnimation} 15s infinite;
`;

// export const ShowAnimation = styled.div<IAnimation>`
// ${({ isHide, showRainbow }) => css`
//   animation: ${showRainbow && !isHide ? Animation.appearAnimation : 'none'} 2s
//     ease-in-out forwards;

//   ${isHide &&
//   css`
//     animation: ${showRainbow ? Animation.disappearAnimation : 'none'} 2s
//       ease-in-out forwards;
//   `}
// `}
// `;

// export const ContainerRainbowAnimation = styled.div<IAnimation>`
//   display: flex;
//   justify-content: center;
//   max-width: 1830px;
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
