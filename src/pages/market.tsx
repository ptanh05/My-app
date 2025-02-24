import React from 'react';

const Market: React.FC = () => {
  // Sample items to display
  const items = [
    { id: 1, name: 'Epic Sword', rarity: 'Epic', image: '⚔️' },
    { id: 2, name: 'Legendary Shield', rarity: 'Legendary', image: '🛡️' },
    { id: 3, name: 'Rare Potion', rarity: 'Rare', image: '🧪' },
    { id: 4, name: 'Mythical Armor', rarity: 'Mythical', image: '🦺' },
    { id: 5, name: 'Common Bow', rarity: 'Common', image: '🏹' },
    { id: 6, name: 'Ancient Tome', rarity: 'Epic', image: '📜' },
  ];

  return (
    <div className="market-container">
      <div className="header">
        <div className="header-left">
          <span className="icon">🎮</span>
          <h1>GameFi Marketplace</h1>
        </div>
        <div className="header-right">
          <button className="button button-outline">Connect Wallet</button>
          <button className="button button-dark">Sell Item</button>
        </div>
      </div>

      <div className="content">
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <span>Active Players</span>
              <h2>125,431</h2>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-info">
              <span>Items Listed</span>
              <h2>{items.length}</h2>
            </div>
          </div>
        </div>

        <div className="main-grid">
          <div className="sidebar-overlay">
            <div className="sidebar">
              <h2>Categories</h2>
              <div className="category-grid">
                <button className="category-button">
                  <span className="icon">🎮</span>
                  <span>All Items</span>
                </button>
                <button className="category-button">
                  <span className="icon">⚔️</span>
                  <span>Weapons</span>
                </button>
                <button className="category-button">
                  <span className="icon">🛡️</span>
                  <span>Armor</span>
                </button>
                <button className="category-button">
                  <span className="icon">👑</span>
                  <span>Legendary</span>
                </button>
                <button className="category-button">
                  <span className="icon">💎</span>
                  <span>Resources</span>
                </button>
                <button className="category-button">
                  <span className="icon">⭐</span>
                  <span>Characters</span>
                </button>
              </div>
            </div>

            <div className="filters">
              <h2>Search & Filters</h2>
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input type="text" placeholder="Search game items..." />
              </div>
              
              <div className="filter-group">
                <label>Rarity</label>
                <select>
                  <option value="">Select rarity</option>
                  <option value="mythical">Mythical</option>
                  <option value="epic">Epic</option>
                  <option value="rare">Rare</option>
                  <option value="legendary">Legendary</option>
                </select>
              </div>

              <button className="button button-dark filter-apply">
                <span className="icon">🔍</span>
                Apply Filters
              </button>
            </div>
          </div>

          {/* Items List Section */}
          <div className="items-list">
            <h2>Items</h2>
            <ul>
              {items.map(item => (
                <li key={item.id} className="item-card">
                  <span className="item-icon">{item.image}</span>
                  <span className="item-name">{item.name}</span>
                  <span className="item-rarity">{item.rarity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;