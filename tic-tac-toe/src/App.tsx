import { Game } from './components/Game';
import { Player } from './components/Player';

import { Main } from './styles/App';

function App() {
  return (
    <Main>
      <Player symbol={'x'} />

      <Game />

      <Player symbol={'o'} />
    </Main>
  );
}

export default App;
