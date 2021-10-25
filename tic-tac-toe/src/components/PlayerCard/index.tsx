import { ReactElement, useContext } from 'react';
import { Circle, X } from 'react-feather';
import { PlayersContext } from '../../contexts/PlayersContext';

import { Card } from '../Card';
import { PlayerImage } from '../PlayerImage';
import { PlayerInfo, PlayerName } from './styles';

interface Props {
  symbol: 'x' | 'o';
}

interface Symbol {
  name: 'Cruz' | 'Círculo';
  icon: ReactElement;
}

export function PlayerCard({ symbol }: Props) {
  const { playerOne, playerTwo } = useContext(PlayersContext);

  const player = symbol === 'x' ? playerOne : playerTwo;

  const playerSymbol: Symbol =
    symbol === 'x'
      ? {
          name: 'Cruz',
          icon: <X width='1.5rem' strokeWidth='1.5' />,
        }
      : {
          name: 'Círculo',
          icon: <Circle width='1rem' />,
        };

  return (
    <Card>
      <PlayerImage icon={player.icon} color={player.color} />

      <PlayerName>{player.name}</PlayerName>

      <PlayerInfo>{playerSymbol.name}</PlayerInfo>

      <PlayerInfo>
        {playerSymbol.icon} <span>{player.score}</span>
      </PlayerInfo>
    </Card>
  );
}
