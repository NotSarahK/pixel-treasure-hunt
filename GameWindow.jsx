import React from 'react';

const GameWindow = ({ 
  isOpen, 
  score, 
  timeLeft, 
  foundItems, 
  totalItems, 
  onStartGame, 
  onResetGame,
  gameActive 
}) => {
  if (!isOpen && gameActive) return null;

  return (
    <div className={`game-window ${isOpen ? 'open' : ''}`}>
      <div className="window-header">
        <div className="window-title">
          <span className="window-icon">🎮</span>
          Item Hunter 95
        </div>
        <div className="window-controls">
          <button className="window-btn minimize">_</button>
          <button className="window-btn maximize">□</button>
          <button className="window-btn close">×</button>
        </div>
      </div>
      
      <div className="window-content">
        {!gameActive && timeLeft === 0 ? (
          <div className="game-over">
            <h2>🎯 Game Over!</h2>
            <div className="final-stats">
              <p>Final Score: <strong>{score}</strong></p>
              <p>Items Found: <strong>{foundItems}/{totalItems}</strong></p>
              <p>Completion: <strong>{Math.round((foundItems/totalItems) * 100)}%</strong></p>
            </div>
            <div className="game-buttons">
              <button className="win95-btn" onClick={onStartGame}>
                Play Again
              </button>
              <button className="win95-btn secondary" onClick={onResetGame}>
                Main Menu
              </button>
            </div>
          </div>
        ) : (
          <div className="game-menu">
            <h1>🏆 Windows 95 Item Hunter</h1>
            <p className="game-description">
              Click around the desktop to find hidden items!<br/>
              Find as many items as possible within 60 seconds.
            </p>
            
            <div className="game-info">
              <div className="info-box">
                <h3>📋 How to Play:</h3>
                <ul>
                  <li>Look for clickable items on the desktop</li>
                  <li>Click items to collect them</li>
                  <li>Each item gives you 10 points</li>
                  <li>Find all {totalItems} items before time runs out!</li>
                </ul>
              </div>
            </div>
            
            <div className="game-buttons">
              <button className="win95-btn primary" onClick={onStartGame}>
                🎯 Start Hunt
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameWindow;