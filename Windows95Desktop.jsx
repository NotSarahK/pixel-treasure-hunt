import React, { useState, useEffect } from 'react';
import Taskbar from './Taskbar';
import GameWindow from './GameWindow';
import ItemHuntGame from './ItemHuntGame';
import { mockItems } from '../data/mockData';

const Windows95Desktop = () => {
  const [score, setScore] = useState(0);
  const [foundItems, setFoundItems] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameActive, setGameActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (gameActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
    return () => clearInterval(interval);
  }, [gameActive, timeLeft]);

  const startGame = () => {
    setGameStarted(true);
    setGameActive(true);
    setScore(0);
    setFoundItems([]);
    setTimeLeft(60);
  };

  const findItem = (itemId) => {
    if (!foundItems.includes(itemId) && gameActive) {
      setFoundItems([...foundItems, itemId]);
      setScore(score + 10);
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameActive(false);
    setScore(0);
    setFoundItems([]);
    setTimeLeft(60);
  };

  return (
    <div className="desktop">
      <div className="desktop-background">
        <ItemHuntGame 
          items={mockItems}
          onItemFound={findItem}
          foundItems={foundItems}
          gameActive={gameActive}
        />
        
        <GameWindow 
          isOpen={!gameStarted}
          score={score}
          timeLeft={timeLeft}
          foundItems={foundItems.length}
          totalItems={mockItems.length}
          onStartGame={startGame}
          onResetGame={resetGame}
          gameActive={gameActive}
        />
      </div>
      
      <Taskbar 
        score={score} 
        timeLeft={timeLeft}
        gameActive={gameActive}
      />
    </div>
  );
};

export default Windows95Desktop;