import { createContext, ReactNode, useEffect, useState } from 'react';

interface Player {
  name: string;
  score: number;
  icon: string;
  color: string;
}

interface PlayersContextData {
  playerOne: Player;
  playerTwo: Player;
  setPlayerOneName: (name: string) => void;
  setPlayerOneScore: (score: number) => void;
  setPlayerTwoName: (name: string) => void;
  setPlayerTwoScore: (score: number) => void;
  setPlayersIconsAndColors: () => void;
}

interface PlayersProviderProps {
  children: ReactNode;
}

export const PlayersContext = createContext({} as PlayersContextData);

export function PlayersProvider({ children }: PlayersProviderProps) {
  const defaultPlayer: Player = {
    name: 'Jogador',
    score: 0,
    icon: '',
    color: '',
  };

  const [playerOne, setPlayerOne] = useState<Player>(defaultPlayer);
  const [playerTwo, setPlayerTwo] = useState<Player>(defaultPlayer);

  function getRandomItem(array: any) {
    const item = Math.floor(Math.random() * array.length);
    return item;
  }

  function setPlayersIconsAndColors() {
    const iconsAndColors = [
      {
        icon: 'https://i.ibb.co/n3MF5C1/alien.png',
        color: 'purple',
      },
      {
        icon: 'https://i.ibb.co/ZHvgfjs/bomb.png',
        color: 'orange',
      },
      {
        icon: 'https://i.ibb.co/QvGF2Xz/cherries.png',
        color: 'green',
      },
      {
        icon: 'https://i.ibb.co/Z1py7r9/cowboy.png',
        color: 'yellow',
      },
      {
        icon: 'https://i.ibb.co/pZS77wV/diamond.png',
        color: 'blue',
      },
      {
        icon: 'https://i.ibb.co/F65BwjN/unicorn.png',
        color: 'pink',
      },
    ];

    const playerOneRandomPosition = getRandomItem(iconsAndColors);

    let newIconsAndColors = [];
    newIconsAndColors.push(...iconsAndColors);
    newIconsAndColors.splice(playerOneRandomPosition, 1);

    const playerTwoRandomPosition = getRandomItem(newIconsAndColors);

    setPlayerOne({
      ...playerOne,
      color: iconsAndColors[playerOneRandomPosition].color,
      icon: iconsAndColors[playerOneRandomPosition].icon,
      name: 'Jogador',
      score: 0,
    });

    setPlayerTwo({
      ...playerTwo,
      color: newIconsAndColors[playerTwoRandomPosition].color,
      icon: newIconsAndColors[playerTwoRandomPosition].icon,
      name: 'Jogador',
      score: 0,
    });
  }

  useEffect(() => {
    setPlayersIconsAndColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setPlayerOneScore(score: number) {
    setPlayerOne({
      ...playerOne,
      score,
    });
  }

  function setPlayerTwoScore(score: number) {
    setPlayerTwo({
      ...playerTwo,
      score,
    });
  }

  function setPlayerOneName(name: string) {
    setPlayerOne({
      ...playerOne,
      name,
    });
  }

  function setPlayerTwoName(name: string) {
    setPlayerTwo({
      ...playerTwo,
      name,
    });
  }

  return (
    <PlayersContext.Provider
      value={{
        playerOne,
        playerTwo,
        setPlayerOneName,
        setPlayerOneScore,
        setPlayerTwoName,
        setPlayerTwoScore,
        setPlayersIconsAndColors,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
}
