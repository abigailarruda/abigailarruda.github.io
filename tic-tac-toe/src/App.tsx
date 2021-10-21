import { Game } from './components/Game';
import { Player } from './components/Player';

import { Main } from './styles/App';

function App() {
  return (
    <Main>
      <Player name='Player 01' number='one' score={0} symbol={'x'} />

      <Game />

      <Player name='Player 02' number='two' score={0} symbol={'o'} />
    </Main>
  );
}

export default App;
