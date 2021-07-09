import React, { memo } from 'react';
import styled from 'styled-components';

interface Props {
  readonly text: string;
  readonly disabled?: boolean;
  onClick(): void;
}

const Button = ({
  text, disabled, onClick,
}: Props) => (
  <Root>
    <RowButton
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </RowButton>
  </Root>
);

Button.defaultProps = {
  disabled: false,
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 25rem;
  width: 100%;
  cursor: not-allowed;
`;

const RowButton = styled.button(({ disabled }) => ({
  background: 'transparent',
  border: '1px solid #fff',
  color: '#fff',
  padding: '1rem',
  width: '100%',
  transition: '.2s',
  fontFamily: 'inherit',

  ...(disabled ? ({
    cursor: 'not-allowed !important',
    background: 'rgba(0, 0, 0, 0.1)',
    color: '#999999',
  }) : ({
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
      cursor: 'pointer',
    },
  })),
}));

export default memo(Button);
