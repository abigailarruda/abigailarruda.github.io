import { ButtonHTMLAttributes } from 'react';
import { Circle, X } from 'react-feather';

import { SquareButton } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  turn: string | null;
}

export function Square({ disabled, turn = null, ...rest }: Props) {
  return (
    <SquareButton {...rest} disabled={disabled}>
      {turn &&
        (turn === 'x' ? (
          <X width='7rem' height='7rem' color='#8492a6' strokeWidth='1.5' />
        ) : (
          <Circle width='5rem' height='5rem' color='#8492a6' />
        ))}
    </SquareButton>
  );
}
