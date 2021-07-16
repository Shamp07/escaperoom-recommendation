import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import * as T from '@types';
import Button from '@atoms/Button';
import axios from 'axios';
import tempImage from '../../../data/images/temp_escape_logo.jpg';

interface Props {
  answer: T.Answer;
}

const Recommend = ({ answer }: Props) => {
  // TODO
  // const [theme, setTheme] = useState(null);
  // useEffect(() => {
  //   axios.get('https://roomescapesystem.herokuapp.com/result', {
  //     params: answer,
  //   })
  //     .then((result) => {
  //       const { data } = result;
  //       setTheme(data);
  //     });
  // }, []);

  return (
    <>
      <Title>이 테마를 추천드립니다!</Title>
      <img src={tempImage} alt="temp-logo" />
      <Info>
        테마 명: 방탈출 테마
        /
        지점: 방탈출 지점
      </Info>
      <Button
        text="더 알아보기"
        onClick={() => {}}
      />
      <Button
        text="이 테마는 이미 했어요!"
        onClick={() => {}}
      />
      <span>
        이미 한 테마 목록은 쿠키에 저장됩니다. 초기화를 원하면 브라우저에서 쿠키를 초기화시키세요!
      </span>
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
