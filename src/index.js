import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from "./styles/global";
import theme from "./styles/theme";
import App from './App';
import {RecoilRoot} from "recoil";

ReactDOM.render(
    <RecoilRoot>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <App/>
        </ThemeProvider>
    </RecoilRoot>,
    document.querySelector('#root')
);
