import React, { useCallback } from 'react';
import styled from 'styled-components';

import Button from '@atoms/Button';

interface Props {
  id: number;
  index: number;
  text: string;
  isChecked: boolean;
  onClick(id: number): void;
}

const CheckButton = ({
  id, text, index, isChecked, onClick,
}: Props) => {
  const onCheck = useCallback(() => {
    onClick(id);
  }, [index]);

  return (
    <Root isChecked={isChecked}>
      <Button
        text={text}
        onClick={onCheck}
      />
    </Root>
  );
};

interface CheckProps {
  isChecked: boolean;
}

const Root = styled.div<CheckProps>(({ isChecked }) => ({
  '& button': {
    ...(isChecked ? ({
      backgroundColor: '#fff',
      color: '#000',
      cursor: 'pointer',
    }) : null),
  },
}));

export default CheckButton;
