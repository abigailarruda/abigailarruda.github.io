import { Button } from '../Button';
import { Card } from '../Card';

import { ButtonGroup, Cell, GameSection, TicTacToe } from './styles';

export function Game() {
  return (
    <GameSection>
      <Card>
        <ButtonGroup>
          <Button>Iniciar</Button>
          <Button isOutlined>Resetar</Button>
        </ButtonGroup>

        <TicTacToe>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </TicTacToe>
      </Card>
    </GameSection>
  );
}
