import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import * as T from '@types';
import Start from './Start';
import Quiz from './Quiz';
import Recommend from './Recommend';

const Page = () => {
  const [page, setPage] = useState<T.Page>(T.Page.START);
  const [answer, setAnswer] = useState<T.Answer>({});

  const moveToStart = useCallback(() => {
    setPage(T.Page.START);
  }, []);

  const moveToQuiz = useCallback(() => {
    setPage(T.Page.QUIZ);
  }, []);

  const moveToRecommend = useCallback(() => {
    setPage(T.Page.RECOMMEND);
  }, []);

  const content = (() => {
    switch (page) {
      case T.Page.START:
        return <Start moveToQuiz={moveToQuiz} />;
      case T.Page.QUIZ:
        return (
          <Quiz
            moveToStart={moveToStart}
            moveToRecommend={moveToRecommend}
            answer={answer}
            setAnswer={setAnswer}
          />
        );
      case T.Page.RECOMMEND:
        return <Recommend answer={answer} />;
      default:
        return <Start moveToQuiz={moveToQuiz} />;
    }
  })();

  return (
    <Root>
      {content}
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  min-height: 100vh;

  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Page;
