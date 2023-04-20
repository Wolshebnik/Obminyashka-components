import styled from 'styled-components';

import sun from 'assets/img/sun.png';
import bgCloud from 'assets/img/bg-cloud.png';
import sunEmotion from 'assets/img/sun-emotion.png';

export const Wrapper = styled.div`
  width: 875px;
  height: 490px;
  color: ${({ theme }) => theme.colors.white};
`;

export const MainCloud = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url(${bgCloud});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Title = styled.p`
  margin: 25px 0;
  font-size: 35px;
  font-weight: 500;
  line-height: 40px;
  z-index: 5;
`;

export const Text = styled.p`
  margin-bottom: 40px;
  font-size: 23px;
  font-weight: 400;
  line-height: 27px;
  z-index: 5;
`;

export const DefaultSun = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 148px;
  height: 148px;
  background-image: url(${sun});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 5;
`;

export const SunEmotion = styled.div`
  width: 103px;
  height: 103px;
  background-image: url(${sunEmotion});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 5;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
