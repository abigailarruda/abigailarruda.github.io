import { X, Circle } from 'react-feather';

import './styles/global.scss';
import './styles/alert.scss';

function App() {
  return (
    <main>
      <section className='player'>
        <div className='card'>
          <div className='card-image' id='player-one-card-image'>
            <img
              alt=''
              id='player-one-image'
              src='https://i.ibb.co/8xtwycY/cloud-2601-fe0f.png'
            />
          </div>

          <h2 id='player-one-name'>Jogador 01</h2>

          <p>Cruz</p>

          <p>
            <X width='1.5rem' stroke-width='1.5' />
            <span id='player-one-score'>0</span>
          </p>
        </div>
      </section>

      <section className='game'>
        <div className='buttons'>
          <button id='button-start'>Iniciar</button>

          <button id='button-restart'>Resetar</button>
        </div>

        <div className='tic-tac-toe'>
          <div className='cell' id='0'></div>

          <div className='cell' id='1'></div>

          <div className='cell' id='2'></div>

          <div className='cell' id='3'></div>

          <div className='cell' id='4'></div>

          <div className='cell' id='5'></div>

          <div className='cell' id='6'></div>

          <div className='cell' id='7'></div>

          <div className='cell' id='8'></div>
        </div>
      </section>

      <section className='player'>
        <div className='card'>
          <div className='card-image' id='player-two-card-image'>
            <img
              alt=''
              id='player-two-image'
              src='https://i.ibb.co/yPT7H6N/envelope-2709-fe0f.png'
            />
          </div>

          <h2 id='player-two-name'>Jogador 02</h2>

          <p>Círculo</p>

          <p>
            <Circle width='1rem' />
            <span id='player-two-score'>0</span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
