import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import Button from '@atoms/Button';
import tempData from './question.json';

interface Question {
  readonly id: number;
  readonly text: string;
  readonly answers: Answer[];
}

interface Answer {
  id: number;
  text: string;
}

interface Props {
  moveToStart(): void;
  moveToRecommend(): void;
}

const Quiz = ({ moveToStart, moveToRecommend }: Props) => {
  const [questions, setQuestions] = useState<Question[]>(tempData);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const isLast = index === questions.length - 1;

  const prev = useCallback(() => {
    if (!index) moveToStart();

    setIndex((prevState) => prevState - 1);
  }, [!index]);

  const next = useCallback(() => {
    if (isLast) moveToRecommend();

    setIndex((prevState) => prevState + 1);
  }, [isLast]);

  const onCheck = useCallback((id: number) => {
    setAnswers((prevState) => [...prevState, id]);
  }, []);

  const answerList = useMemo(() => (
    questions[index].answers.map(({ id, text }) => (
      <Button key={id} id={id} text={text} onCheck={onCheck} isChecked={answers.includes(id)} />
    ))
  ), [index, answers]);

  return (
    <>
      <Title>
        {questions[index].text}
      </Title>
      <AnswerWrapper>
        {answerList}
      </AnswerWrapper>
      <ButtonWrapper>
        <Button text="이전" onClick={prev} />
        <Button text="다음" onClick={next} />
      </ButtonWrapper>
    </>
  );
};

const Title = styled.h1`
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

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 25rem;

  & > div:first-of-type > button {
    border-right: 0;
  }
`;

export default Quiz;
