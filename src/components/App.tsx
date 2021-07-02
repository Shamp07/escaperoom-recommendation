import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const App = () => (
  <Root>
    <GlobalStyle  />
    <QuizWrapper>
      <h1>
        방탈출 테마 추천
      </h1>
      <p>
        해당 페이지는 방탈출을 추천해주는 시스템입니다.
      </p>
      <div>
        <button>시작하기!</button>
      </div>
    </QuizWrapper>
  </Root>
);

const Root = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const QuizWrapper = styled(Root)`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  & > h1 {
    font-size: 3.1rem;
    margin-bottom: 1rem;
  }
  
  & > p {
    max-width: 35rem;
    font-size: 1.15em;
    line-height: 1.2em;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 25rem;
    width: 100%;
    
    & > button {
      background: transparent;
      border: 1px solid #fff;
      color: #fff;
      padding: 1rem;
      width: 100%;
      transition: .2s;

      &:hover {
        background: #fff;
        color: #000;
        cursor: pointer;
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #f3f5f6;
    font-family: 'Roboto', 'Noto Sans KR', serif;
    color: #fff;
    background-image: radial-gradient(49% 81% at 45% 47%,rgba(157,80,4,.270588) 0,rgba(7,58,255,0) 100%),radial-gradient(113% 91% at 17% -2%,#111dc9 1%,rgba(220,78,78,0) 99%),radial-gradient(142% 91% at 83% 7%,#11c9b4 1%,rgba(255,0,0,0) 99%),radial-gradient(142% 91% at -6% 74%,#5b11c9 1%,rgba(255,0,0,0) 99%),radial-gradient(142% 91% at 111% 84%,#160e82 0,#1746bd 100%);
  }

  h1, h2, h3, h4, p {
    margin: 0;
  }
`;

export default App;
