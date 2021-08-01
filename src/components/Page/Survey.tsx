import React, {
  useCallback, useMemo, useState, Dispatch,
  SetStateAction, useEffect,
} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Button from '@atoms/Button';
import CheckButton from '@atoms/CheckButton';
import Spinner from '@atoms/Spinner';
import * as T from '@types';

enum AnswerType {
  SINGLE = 'single',
  MULTI = 'multi',
}

interface Question {
  readonly id: string;
  readonly context: string;
  readonly answers: string[];
  readonly type: AnswerType;
}

interface Props {
  moveToStart(): void;
  moveToRecommend(): void;
  answer: T.Answer;
  setAnswer: Dispatch<SetStateAction<T.Answer>>;
}

const Survey = ({
  moveToStart, moveToRecommend, answer, setAnswer,
}: Props) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const isLast = index === questions.length - 1;
  const isMoreColumn = questions.length >= 10;
  const answerType = useMemo(() => questions[index] && questions[index].type, [questions[index]]);

  useEffect(() => {
    axios.get('https://roomescapesystem.herokuapp.com/api/survey')
      .then((result) => {
        const { data } = result;
        setQuestions(data.questions);
        setIsLoaded(true);
      });
  }, []);

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
    questions.length ? questions[index].answers.map((text, idx) => (
      <CheckButton
        /* eslint-disable-next-line react/no-array-index-key */
        key={idx}
        index={index}
        id={idx}
        text={text}
        onClick={onCheck}
        isChecked={answer[index]?.includes(idx)}
      />
    )) : null
  ), [index, answer[index], questions.length]);

  const multiSelectionText = useMemo(() => (
    answerType === AnswerType.MULTI
      ? <div>(다중 선택 가능)</div> : null
  ), [answerType]);

  if (!isLoaded) return <Spinner />;

  return (
    <>
      <Title>
        {questions[index].context}
        {multiSelectionText}
      </Title>
      <AnswerWrapper isMoreColumn={isMoreColumn}>
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
  
  & > div {
    text-align: center;
    font-size: 2rem;
  }
`;

interface MoreColumnProp {
  isMoreColumn: boolean;
}

const AnswerWrapper = styled.div<MoreColumnProp>(({ isMoreColumn }) => ({
  width: '100%',
  maxWidth: '25rem',

  '& > div': {
    marginBottom: '1rem',
    width: '100%',
  },
}));

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 25rem;

  & > div:first-of-type > button {
    border-right: 0;
  }
`;

export default Survey;
