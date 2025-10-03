import React, { useState } from 'react';

const Taskbar = ({ score, timeLeft, gameActive }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="taskbar">
      <button className="start-button">
        <span className="start-icon">🏁</span>
        Start
      </button>
      
      <div className="taskbar-center">
        <div className="game-stats">
          <span className="score">Score: {score}</span>
          {gameActive && <span className="timer">Time: {timeLeft}s</span>}
        </div>
      </div>
      
      <div className="system-tray">
        <div className="clock">
          {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;