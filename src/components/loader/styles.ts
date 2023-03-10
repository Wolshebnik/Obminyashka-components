import styled, { css, keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    top: 24px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 72px;
    height: 49px;
    opacity: 0;
  }
`;

const linearAnimation = keyframes`
   0% {
        left:-40%;
    }
    100% {
        left: 130%; 
    }
`;

export const styleSet = css`
  position: absolute;
  border: 4px solid ${({ theme }) => theme.colors.white};
  opacity: 1;
  border-radius: 50%;
  animation: 1s ${animation} infinite;
`;

export const LdsRipple = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 49px;
`;

export const FirstDiv = styled.div`
  ${styleSet};
`;

export const SecondDiv = styled.div`
  ${styleSet};
  animation-delay: -0.5s;
`;
export const styleWrapper = styled.div`
  position: relative;
  min-width: 100%;
  height: 50px;
`;

export const LdsLinear = styled.div`
  position: absolute;
  top: 0;
  height: 50px;
  width: 45px;
  background: linear-gradient(${({ theme }) => theme.colors.buttonGradient});
  transform: skewX(-45deg);
  animation: 1.5s ${linearAnimation} infinite linear;
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 50px;
  background: ${({ theme }) => theme.colors.btnBlue};
  border-radius: 25px;
`;
