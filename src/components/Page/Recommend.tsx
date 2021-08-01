import React from 'react';
import styled from 'styled-components';

import Button from '@atoms/Button';
import tempImage from '../../../data/images/temp_escape_logo.jpg';

const Recommend = () => (
  <Root>
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
    <Description>
      이미 한 테마 목록은 쿠키에 저장됩니다. 초기화를 하고 싶다면 브라우저에서 쿠키를 초기화시키세요!
    </Description>
  </Root>
);

const Root = styled.div`
  text-align: center;
  
  div:first-of-type > button {
    border-bottom: 0;
  }
`;

const Title = styled.h1`
  font-size: 3.1rem;
  margin-bottom: 2rem;
`;

const Info = styled.h1`
  margin: 1.5rem 0;
`;

const Description = styled.div`
  margin-top: 1.5rem;
  font-weight: lighter;
`;

export default Recommend;
