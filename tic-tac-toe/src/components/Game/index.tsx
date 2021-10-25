import { useContext, useState } from 'react';
import Swal from 'sweetalert2';

import { PlayersContext } from '../../contexts/PlayersContext';

import { Button } from '../Button';
import { Card } from '../Card';
import { Square } from '../Square';

import { ButtonGroup, GameSection, TicTacToe } from './styles';

export function Game() {
  const {
    playerOne,
    playerTwo,
    setPlayerOneName,
    setPlayerOneScore,
    setPlayerTwoName,
    setPlayerTwoScore,
    setPlayersIconsAndColors,
  } = useContext(PlayersContext);

  const [totalMovements, setTotalMovements] = useState(0);
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [isSquareDisabled, setIsSquareDisabled] = useState(true);
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));

  const normalAlertConfig = {
    showCloseButton: false,
    allowOutsideClick: false,
    backdrop: true,
  };

  function verifyWinner(gameBoard: string[]) {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i];
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return gameBoard[a];
      }
    }
    return null;
  }

  function endGame() {
    while (board.length > 0) {
      board.pop();
    }
    setTotalMovements(0);
    setIsPlayerOneTurn(true);
    setBoard(Array(9).fill(null));
  }

  function restartGame() {
    endGame();
    setPlayersIconsAndColors();
    setIsSquareDisabled(true);
  }

  function playGame(index: number) {
    const playerSymbol = isPlayerOneTurn ? 'x' : 'o';

    let movements = totalMovements;
    let gameBoard = [...board];

    if (board[index] !== null) {
      return;
    }

    gameBoard[index] = playerSymbol;
    setBoard([...gameBoard]);

    movements += 1;

    if (movements >= 5) {
      let winner = verifyWinner(gameBoard);

      if (winner && winner === playerSymbol) {
        let winnerName = isPlayerOneTurn ? playerOne.name : playerTwo.name;

        Swal.fire({
          title: `Parabéns, ${winnerName}!`,
          text: 'Você ganhou!',
          confirmButtonText: 'Fechar',
          ...normalAlertConfig,
        }).then(() => {
          if (isPlayerOneTurn) {
            setPlayerOneScore(playerOne.score + 1);
          } else {
            setPlayerTwoScore(playerTwo.score + 1);
          }

          endGame();
          Swal.close();
        });
      } else if (!winner && movements === 9) {
        Swal.fire({
          title: 'Empate!',
          text: 'Jogue novamente!',
          confirmButtonText: 'Fechar',
          ...normalAlertConfig,
        }).then(() => {
          endGame();
          Swal.close();
        });
      }
    }

    setTotalMovements(movements);
    setIsPlayerOneTurn(!isPlayerOneTurn);
  }

  function startGame() {
    Swal.fire({
      title: 'Ei, Jogador 01!',
      confirmButtonText: 'Salvar',
      input: 'text',
      inputPlaceholder: 'Nome',
      text: 'Qual é o seu nome?',
      ...normalAlertConfig,
    }).then((result) => {
      if (result.isConfirmed) {
        setPlayerOneName(
          String(result.value).trim() ? result.value : 'Jogador 01'
        );

        Swal.close();

        Swal.fire({
          title: 'Ei, Jogador 02!',
          confirmButtonText: 'Salvar',
          input: 'text',
          inputPlaceholder: 'Nome',
          text: 'Qual é o seu nome?',
          ...normalAlertConfig,
        }).then((result) => {
          if (result.isConfirmed) {
            setPlayerTwoName(
              String(result.value).trim() ? result.value : 'Jogador 02'
            );

            setIsSquareDisabled(false);

            Swal.close();
          }
        });
      }
    });
  }

  return (
    <GameSection>
      <Card>
        <ButtonGroup>
          <Button onClick={startGame}>Jogar</Button>
          <Button isOutlined onClick={restartGame}>
            Resetar
          </Button>
        </ButtonGroup>

        <TicTacToe>
          {board.map((turn, index) => {
            return (
              <Square
                disabled={isSquareDisabled}
                key={index}
                onClick={() => playGame(index)}
                turn={turn}
              />
            );
          })}
        </TicTacToe>
      </Card>
    </GameSection>
  );
}
