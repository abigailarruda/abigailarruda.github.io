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
  setPlayerOneScore: (score: number) => void;
  setPlayerTwoScore: (score: number) => void;
  setPlayerOneName: (name: string) => void;
  setPlayerTwoName: (name: string) => void;
}

interface PlayersProviderProps {
  children: ReactNode;
}

export const PlayersContext = createContext({} as PlayersContextData);

export function PlayersProvider({ children }: PlayersProviderProps) {
  const [playerOne, setPlayerOne] = useState<Player>({} as Player);
  const [playerTwo, setPlayerTwo] = useState<Player>({} as Player);

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
      icon: iconsAndColors[playerOneRandomPosition].icon,
      color: iconsAndColors[playerOneRandomPosition].color,
    });

    setPlayerTwo({
      ...playerTwo,
      icon: newIconsAndColors[playerTwoRandomPosition].icon,
      color: newIconsAndColors[playerTwoRandomPosition].color,
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
        setPlayerOneScore,
        setPlayerTwoScore,
        setPlayerOneName,
        setPlayerTwoName,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
}
