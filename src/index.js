import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import { GlobalStyle } from './globalstyle.styles'; // Import the global style

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Main />
    </React.StrictMode>,
    document.getElementById('root')
);

