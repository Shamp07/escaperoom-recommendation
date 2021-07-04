import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Page from './Page';

const App = () => (
  <Root>
    <GlobalStyle />
    <Page />
  </Root>
);

const Root = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #f3f5f6;
    font-family: 'Roboto', 'Noto Sans KR', serif;
    color: #fff;
    background-image: 
      radial-gradient(49% 81% at 45% 47%, rgba(157, 80, 4, .270588) 0, rgba(7, 58, 255, 0) 100%),
      radial-gradient(113% 91% at 17% -2%,#111dc9 1%, rgba(220, 78, 78, 0) 99%), 
      radial-gradient(142% 91% at 83% 7%,#11c9b4 1%, rgba(255, 0, 0, 0) 99%),
      radial-gradient(142% 91% at -6% 74%,#5b11c9 1%, rgba(255, 0, 0, 0) 99%),
      radial-gradient(142% 91% at 111% 84%, #160e82 0, #1746bd 100%);
  }

  h1, h2, h3, h4, p {
    margin: 0;
  }
`;

export default App;
