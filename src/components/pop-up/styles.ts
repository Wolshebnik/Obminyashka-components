import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  height: 100vh;
  background: linear-gradient(105.33deg, #97d7e3 21.37%, #39a5cf 113.49%);
  overflow: hidden;
`;

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 42vw;
  height: 55vh;
  background-color: #ffffff;
  color: #29a5d4;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  z-index: 2;

  div {
    padding: 58px 0 11px;
    text-transform: uppercase;
  }

  span {
    height: 2px;
    background: #29a5d4;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
  }

  label {
    width: 89%;
    color: #8e8e8e;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }

  input {
    padding: 10px;
    height: 47px;
    width: 89%;
    color: #8e8e8e;
    border-radius: 2px;
  }
`;

export const BtnOpen = styled(Link)`
  padding: 8px 0;
  margin-bottom: 68px;
  width: 263px;
  border-radius: 24px;
  background: white;
  color: #81cbde;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
`;

export const BtnSend = styled(Link)`
  display: block;
  padding: 13px 74px;
  margin: auto;
  border-radius: 24px;
  background: linear-gradient(
    262.27deg,
    #7ecde4 45.38%,
    #f1f1f1 51.37%,
    #7ecde4 56.85%
  );
  color: white;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
`;
