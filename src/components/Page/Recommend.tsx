import React, { useEffect } from 'react';
import styled from 'styled-components';

import * as T from '@types';
import tempImage from '../../../data/images/temp_escape_logo.jpg';

interface Props {
  answer: T.Answer;
}

const Recommend = ({ answer }: Props) => {
  useEffect(() => {
    // TODO
  }, []);

  return (
    <>
      <Title>이 테마를 추천드립니다!</Title>
      <img src={tempImage} alt="temp-logo" />
      <Info>
        테마 명: 방탈출 테마
        /
        지점: 방탈출 지점
      </Info>
    </>
  );
};

const Title = styled.h1`
  font-size: 3.1rem;
  margin-bottom: 2rem;
`;

const Info = styled.h1`
  margin-top: 10px;
`;

export default Recommend;
