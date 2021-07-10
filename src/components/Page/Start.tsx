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
      해당 페이지는 방탈출을 추천해주는 시스템입니다.
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
    line-height: 1.2em;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export default Start;
