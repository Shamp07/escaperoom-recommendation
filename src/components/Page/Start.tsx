import React from 'react';
import styled from 'styled-components';

import Button from '@atoms/Button';

interface Props {
  moveToSurvey(): void;
}

const Start = ({ moveToSurvey }: Props) => (
  <Root>
    <h1>
      방탈출 테마 추천
    </h1>
    <p>
      해당 페이지는 방탈출 테마를 추천해주는 페이지입니다.
      <br />
      질문의 답변에 해당하는 방탈출 테마를 추천해드려요.
      <br />
      아래의
      <b> 시작하기! </b>
      버튼을 통해 방탈출 테마를 추천받아보세요!
    </p>
    <Button text="시작하기!" onClick={moveToSurvey} />
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
    line-height: 1.8em;
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: lighter;
  }
`;

export default Start;
