import React from 'react';
import styled from 'styled-components';

import * as T from '@types';

interface Props {
  answer: T.Answer;
}

const Recommend = ({ answer }: Props) => (
  <>
    <Title>이 테마를 추천드립니다!</Title>
  </>
);

const Title = styled.h1`
  font-size: 3.1rem;
  margin-bottom: 2rem;
`;

export default Recommend;
