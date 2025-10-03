import React from 'react';

const ItemHuntGame = ({ items, onItemFound, foundItems, gameActive }) => {
  const handleItemClick = (itemId) => {
    if (gameActive && !foundItems.includes(itemId)) {
      onItemFound(itemId);
    }
  };

  return (
    <div className="hunt-area">
      {items.map(item => (
        <div
          key={item.id}
          className={`hunt-item ${foundItems.includes(item.id) ? 'found' : ''} ${!gameActive ? 'disabled' : ''}`}
          style={{ 
            left: `${item.x}%`, 
            top: `${item.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          onClick={() => handleItemClick(item.id)}
          title={foundItems.includes(item.id) ? `Found: ${item.name}` : (gameActive ? 'Click to collect!' : '')}
        >
          <div className="item-icon">
            {item.icon}
          </div>
          {foundItems.includes(item.id) && (
            <div className="found-indicator">✓</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemHuntGame;