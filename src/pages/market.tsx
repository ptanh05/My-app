"use client"

import { useState } from "react"
import { Wallet, Gamepad2, Sword, Users, Swords } from "lucide-react"

export default function MarketplacePage() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  return (
    <div className="market-container">
      {/* Header */}
      <div className="market-header">
        <div className="market-title">
          <Gamepad2 className="h-6 w-6" />
          <span>GameFi Marketplace</span>
        </div>
        <div className="market-actions">
          <button className="market-button outline">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </button>
          <button className="market-button dark">
            <Sword className="h-4 w-4" />
            Sell Item
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-container">
        <div className="stat-card">
          <Users className="h-6 w-6 text-blue-500" />
          <div>
            <div className="stat-label">Active Players</div>
            <div className="stat-value">125,431</div>
          </div>
        </div>
        <div className="stat-card">
          <Swords className="h-6 w-6 text-green-500" />
          <div>
            <div className="stat-label">Items Listed</div>
            <div className="stat-value">0</div> {/* Không có item nào */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="market-layout">
        {/* Sidebar */}
        <div className="market-sidebar">
          {/* Categories */}
          <div className="sidebar-section">
            <h2 className="sidebar-title">Categories</h2>
            <div className="category-list">
              {categories.map((category) => (
                <button key={category.name} className="category-item">
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="sidebar-section">
            <h2 className="sidebar-title">Search & Filters</h2>

            <div className="search-wrapper">
              <input type="text" placeholder="Search game items..." className="search-input" />
            </div>

            <div className="filter-group">
              <label className="filter-label">Rarity</label>
              <select className="filter-select">
                <option value="">Select rarity</option>
                <option value="common">Common</option>
                <option value="rare">Rare</option>
                <option value="epic">Epic</option>
                <option value="legendary">Legendary</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Price Range (GOLD)</label>
              <input type="range" min="0" max="10000" className="range-slider" />
              <div className="range-values">
                <span>0</span>
                <span>10,000</span>
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Level Range</label>
              <input type="range" min="0" max="100" className="range-slider" />
              <div className="range-values">
                <span>0</span>
                <span>100</span>
              </div>
            </div>

            <button className="market-button dark w-full">Apply Filters</button>
          </div>
        </div>

        {/* Items Grid (Ẩn nếu không có items) */}
        {items.length > 0 ? (
          <div className="items-grid">
            {items.map((item, i) => (
              <div key={i} className="item-card">
                <div className="item-image">
                  <span className="item-level">Level {item.level}</span>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="item-content">
                  <div className="item-header">
                    <h3 className="item-title">{item.name}</h3>
                    <p className="item-type">{item.type}</p>
                  </div>
                  <span className={`rarity-badge rarity-${item.rarity.toLowerCase()}`}>{item.rarity}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No items available</p>
        )}
      </div>
    </div>
  )
}

const categories = [
  { name: "Weapons", icon: <Sword className="h-4 w-4" /> },
  { name: "Armor", icon: <Users className="h-4 w-4" /> },
  { name: "Legendary", icon: <Swords className="h-4 w-4" /> }
]

const items = [] // Đảm bảo không có item nào hiển thị
