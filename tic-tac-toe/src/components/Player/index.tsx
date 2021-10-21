import { PlayerCard } from '../PlayerCard';

import { PlayerSection } from './styles';

interface Props {
  name: string;
  number: 'one' | 'two';
  score: number;
  symbol: 'x' | 'o';
}

export function Player({ name, number, score, symbol }: Props) {
  return (
    <PlayerSection playerNumber={number}>
      <PlayerCard name={name} score={score} symbol={symbol} />
    </PlayerSection>
  );
}
