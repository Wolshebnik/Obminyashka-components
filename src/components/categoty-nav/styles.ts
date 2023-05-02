import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  background: linear-gradient(162.46deg, #97d7e3 0%, #53b2d4 100%);
  padding: 16px 50px 35px;
  color: ${({ theme }) => theme.colors.colorGrey};
  z-index: -1;
  transition: 1s all;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  width: 100vw;
  left: 0;
  top: 82px;
  position: fixed;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 44px;
`;

export const NavbarLinkContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  margin: 0 auto;
`;

export const NavbarLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #6fe5ff 22.42%,
    #d9f6fd 87.89%
  );
  border: 3px dashed #53b3d4;
  border-radius: 50px;

  /* &:hover {
    border: 2px dashed #ffb641;
    box-sizing: border-box;
    box-shadow: 0 4px 40px rgba(255, 199, 0, 0.4);
    border-radius: 111px;
  } */
`;

export const Img = styled.img`
  display: block;
`;

export const Span = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`;
