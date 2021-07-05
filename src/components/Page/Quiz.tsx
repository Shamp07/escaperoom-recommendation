import React, { useCallback, useMemo, useState } from 'react';
import styled from "styled-components";

import tempData from './question.json';
import Button from '@atoms/Button';

interface Question {
  readonly id: number;
  readonly text: string;
  readonly answers: Answer[];
}

interface Answer {
  id: number;
  text: string;
}

const Quiz = () => {
  const [questions, setQuestions] = useState<Question[]>(tempData);
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prevState) => prevState + 1);
  }, []);

  const prev = useCallback(() => {
    setIndex((prevState) => prevState - 1);
  }, []);

  const answerList = useMemo(() => (
    questions[index].answers.map(({ id, text }) => (
      <Button key={id} text={text} onClick={() => {}} />
    ))
  ), [index]);

  return (
    <>
      <QuizTitle>
        {questions[index].text}
      </QuizTitle>
      <AnswerWrapper>
        {answerList}
      </AnswerWrapper>
      <Footer>
        <Button text="이전" onClick={prev} />
        <Button text="다음" onClick={next} />
      </Footer>
    </>
  );
};

const QuizTitle = styled.h1`
  font-size: 3.1rem;
  margin-bottom: 2rem;
`;

const AnswerWrapper = styled.div`
  width: 100%;
  max-width: 25rem;
  & > div {
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
  max-width: 25rem;
  
  & > div:first-of-type > button {
    border-right: 0;
  }
`;

export default Quiz;
