import styled, { css } from 'styled-components';

import * as Icon from '../icon';

export const displayStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 1455px;
  height: 880px;
  color: ${({ theme }) => theme.colors.white};
`;

export const MainCloud = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(100.18deg, #8fd3e1 7.33%, #51b2d4 97.87%);
  clip-path: url(#my-clip-path);

  ${displayStyles};
`;

export const ContentWrapper = styled.div`
  position: absolute;
  flex-direction: column;
  top: 23%;
  z-index: 5;

  ${displayStyles}
`;

export const Title = styled.p`
  margin-bottom: 45px;
  font-size: 60px;
  font-weight: 500;
  line-height: 70px;
`;

export const Text = styled.p`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 400;
  line-height: 47px;
`;

export const Container = styled.div`
  ${displayStyles}
`;

export const StyledSVG = styled(Icon.BgCloudDesktop)`
  width: 100%;
  height: 100%;
`;
