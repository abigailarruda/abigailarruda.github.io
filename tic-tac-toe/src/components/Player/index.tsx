import { PlayerCard } from '../PlayerCard';

import { PlayerSection } from './styles';

interface Props {
  symbol: 'x' | 'o';
}

export function Player({ symbol }: Props) {
  return (
    <PlayerSection>
      <PlayerCard symbol={symbol} />
    </PlayerSection>
  );
}
