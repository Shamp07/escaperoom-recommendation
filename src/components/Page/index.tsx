import React, { memo } from 'react';
import styled from 'styled-components';

import Starting from './Starting';
import * as T from '^/types';


interface Props {
  page: T.Page;
}

const Page = ({ page }: Props) => {
  const content = (() => {
    switch(page) {
      case T.Page.STARTING:
        return <Starting />;
    }
  })( );

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

export default memo(Page);
