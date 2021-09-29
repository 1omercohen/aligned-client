import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #eff3f9;
  }
  
  body, #root, .router {
    height: 100%;
    display: grid;
    align-content: center;
    row-gap: 10px;
  }
`;