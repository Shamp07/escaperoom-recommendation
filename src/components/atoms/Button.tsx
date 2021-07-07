import React, { memo } from 'react';
import styled from 'styled-components';

interface Props {
  readonly text: string;
  onClick(): void;
}

const Button = ({
  text, onClick,
}: Props) => (
  <Root>
    <RowButton
      type="button"
      onClick={onClick}
    >
      {text}
    </RowButton>
  </Root>
);

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 25rem;
  width: 100%;
`;

const RowButton = styled.button`
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 1rem;
  width: 100%;
  transition: .2s;
  font-family: inherit;

  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }
`;

export default memo(Button);
