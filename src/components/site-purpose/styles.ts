import styled, { css } from 'styled-components';

import * as Image from 'components/img';
import * as Animation from './animation';

const rainbowCloudsStyles = css`
  position: absolute;
  width: 122px;
  height: 66px;
  background: url(${Image.cloud});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 2;
`;

export const PresentSection = styled.section`
  position: relative;
  background-image: url(${Image.mask});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  width: 100%;
  height: 100vh;
  z-index: 0;
`;

export const Content = styled.div`
  max-width: 1830px;
`;

export const RainbowSection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Rainbow = styled.div`
  animation: ${Animation.rainbowAnim} 6s linear infinite;

  min-width: 265px;
  min-height: 135px;
  background: url(${Image.rainbow});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`;

export const RainbowFirstCloud = styled.div`
  ${rainbowCloudsStyles};

  top: 86%;
  right: 68%;
  animation: ${Animation.firstCloudAnim} 6s linear infinite;
`;

export const RainbowSecondCloud = styled.div`
  ${rainbowCloudsStyles};

  top: 86%;
  left: 68%;
  animation: ${Animation.secondCloudAnim} 6s linear infinite;
`;

export const RedBallon = styled.div`
  position: absolute;
  top: 0%;
  right: 76%;
  width: 96px;
  height: 160px;
  background: url(${Image.redBallon});
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${Animation.redBallonAnim} 8s linear infinite;
  z-index: 3;
`;

export const YellowBallon = styled.div`
  position: absolute;
  bottom: 86%;
  left: 46%;
  width: 60px;
  height: 108px;
  background: url(${Image.yellowBallon});
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${Animation.yellowBallonAnim} 8s linear infinite;
  z-index: 3;
`;

export const OrangeBallon = styled.div`
  position: absolute;
  top: 105%;
  left: 83%;
  width: 84px;
  height: 144px;
  background: url(${Image.orangeBallon});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 3;
`;
