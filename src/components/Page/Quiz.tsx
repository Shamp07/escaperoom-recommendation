import React, {
  useCallback, useMemo, useState, Dispatch,
  SetStateAction,
} from 'react';
import styled from 'styled-components';

import Button from '@atoms/Button';
import CheckButton from '@atoms/CheckButton';
import * as T from '@types';
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
  answer: T.Answer;
  setAnswer: Dispatch<SetStateAction<T.Answer>>;
}

const Quiz = ({
  moveToStart, moveToRecommend, answer, setAnswer,
}: Props) => {
  const [questions] = useState<Question[]>(tempData);
  const [index, setIndex] = useState(0);

  const isLast = index === questions.length - 1;

  const prev = useCallback(() => {
    if (!index) moveToStart();
    else setIndex((prevState) => prevState - 1);
  }, [!index]);

  const next = useCallback(() => {
    if (isLast) moveToRecommend();
    else setIndex((prevState) => prevState + 1);
  }, [isLast]);

  const onCheck = useCallback((id: number) => {
    setAnswer((prevState) => {
      if (prevState[index]) {
        const checkedIndex = prevState[index].findIndex((idx) => idx === id);
        if (checkedIndex > -1) {
          const prevAnswer = [...prevState[index]];
          prevAnswer.splice(checkedIndex, 1);

          return ({ ...prevState, [index]: prevAnswer });
        }
        return ({ ...prevState, [index]: [...prevState[index], id] });
      }

      return ({ ...prevState, [index]: [id] });
    });
  }, [index]);

  const answerList = useMemo(() => (
    questions[index].answers.map(({ id, text }) => (
      <CheckButton
        key={id}
        index={index}
        id={id}
        text={text}
        onClick={onCheck}
        isChecked={answer[index]?.includes(id)}
      />
    ))
  ), [index, answer[index]]);

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
        <Button text="다음" onClick={next} disabled={!answer[index]?.length} />
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
