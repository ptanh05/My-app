import { Search, Filter } from "lucide-react"

export default function SearchFilters() {
  return (
    <>
      <h2>Search & Filters</h2>

      <div className="search-box">
        <Search className="search-icon h-4 w-4" />
        <input type="text" placeholder="Search game items..." />
      </div>

      <div className="filter-group">
        <label>Rarity</label>
        <select>
          <option value="">Select rarity</option>
          <option value="common">Common</option>
          <option value="uncommon">Uncommon</option>
          <option value="rare">Rare</option>
          <option value="epic">Epic</option>
          <option value="legendary">Legendary</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Price Range (GOLD)</label>
        <input type="range" className="range-slider" min="0" max="10000" step="100" />
        <div className="range-labels">
          <span>0</span>
          <span>10,000</span>
        </div>
      </div>

      <div className="filter-group">
        <label>Level Range</label>
        <input type="range" className="range-slider" min="0" max="100" step="1" />
        <div className="range-labels">
          <span>0</span>
          <span>100</span>
        </div>
      </div>

      <button className="button button-dark filter-apply">
        <Filter className="h-4 w-4" />
        Apply Filters
      </button>
    </>
  )
}

