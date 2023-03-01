import { normalize } from 'styled-normalize';
import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  body {
    line-height: 1;
    font-size: 16px;
    font-weight: 400;
  }

  button {
    border: none;
    background-color: inherit;
    color: inherit;
    line-height: inherit;
    cursor: pointer;
  }

  input {
    font-weight: 400;
    font-size: 16px;
    line-height: 1px;
    color: inherit;
  }

  a {
  text-decoration: none;
  color: inherit;
  }

  li {
  list-style-type: none;
}

 ${() => css`
   /* Track */
   ::-webkit-scrollbar-track {
     background: '#f1f1f1';
   }

   /* Handle */
   ::-webkit-scrollbar-thumb {
     background: '#12b6ed';
     border-radius: 10px;
   }

   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
     background: '#0094ff';
   }
 `}

  ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  }
`;
