import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  onClick(): void;
}

const Button = ({ text, onClick }: Props) => (
  <Root>
    <button type="button" onClick={onClick}>
      {text}
    </button>
  </Root>
);

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 25rem;
  width: 100%;

  & > button {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 1rem;
    width: 100%;
    transition: .2s;
    font-family: inherit;

    &:hover {
      background: #fff;
      color: #000;
      cursor: pointer;
    }
  }
`;

export default Button;
