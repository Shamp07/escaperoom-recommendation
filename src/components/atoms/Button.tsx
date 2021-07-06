import React, { memo, useCallback } from 'react';
import styled from 'styled-components';

interface Props {
  readonly id?: number;
  readonly text: string;
  readonly isChecked?: boolean;
  onClick?(): void;
  onCheck?(id: number): void;
}

const Button = ({
  id, text, isChecked, onClick, onCheck,
}: Props) => {
  const onClickCurrent = (id !== undefined && id >= 0 && onCheck) ? useCallback(() => {
    onCheck(id);
  }, [id]) : onClick;

  return (
    <Root>
      <RowButton
        isChecked={Boolean(isChecked)}
        type="button"
        onClick={onClickCurrent}
      >
        {isChecked && 'v'}
        {text}
      </RowButton>
    </Root>
  );
};

Button.defaultProps = {
  id: undefined,
  isChecked: false,
  onClick: undefined,
  onCheck: undefined,
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 25rem;
  width: 100%;
`;

interface CheckProp {
  isChecked: boolean;
}

const RowButton = styled.button<CheckProp>(({ isChecked }) => ({
  background: 'transparent',
  border: '1px solid #fff',
  color: '#fff',
  padding: '1rem',
  width: '100%',
  transition: '.2s',
  fontFamily: 'inherit',

  '&:hover': {
    background: '#fff',
    color: '#000',
    cursor: 'pointer',
  },

  ...(isChecked ? ({
    background: '#fff',
    color: '#000',
    cursor: 'pointer',
  }) : null),
}));

export default memo(Button);
