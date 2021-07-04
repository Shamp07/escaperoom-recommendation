import React from 'react';
import styled from 'styled-components';

interface Props {
  moveToQuiz(): void;
}

const Start = ({ moveToQuiz }: Props) => (
  <Root>
    <h1>
      방탈출 테마 추천
    </h1>
    <p>
      해당 페이지는 방탈출을 추천해주는 시스템입니다.
    </p>
    <div>
      <button type="button" onClick={moveToQuiz}>시작하기!</button>
    </div>
  </Root>
);

const Root = styled.div`
  & > h1 {
    font-size: 3.1rem;
    margin-bottom: 1rem;
    text-align: center;
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
    margin: auto;

    & > button {
      background: transparent;
      border: 1px solid #fff;
      color: #fff;
      padding: 1rem;
      width: 100%;
      transition: .2s;
      font-family: inherit;

      &:hover {
        background: #fff;
        color: #000;
        cursor: pointer;
      }
    }
  }
`;

export default Start;
