import { X, Circle } from 'react-feather';

import { Card } from '../Card';
import { PlayerImage } from '../PlayerImage';
import { PlayerInfo, PlayerName } from './styles';

interface Props {
  name: string;
  score: number;
  symbol: 'x' | 'o';
}

export function PlayerCard({ name, score, symbol }: Props) {
  const symbolName = symbol === 'x' ? 'Cruz' : 'Círculo';

  const symbolIcon =
    symbol === 'x' ? (
      <X width='1.5rem' strokeWidth='1.5' />
    ) : (
      <Circle width='1rem' />
    );

  return (
    <Card>
      <PlayerImage />

      <PlayerName>{name}</PlayerName>

      <PlayerInfo>{symbolName}</PlayerInfo>

      <PlayerInfo>
        {symbolIcon} <span>{score}</span>
      </PlayerInfo>
    </Card>
  );
}
