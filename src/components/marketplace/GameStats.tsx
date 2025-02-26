import { Users, Swords } from "lucide-react"

export default function GameStats() {
  return (
    <div className="stats-row">
      <div className="stat-card">
        <Users className="h-6 w-6 text-blue-500" />
        <div className="stat-info">
          <span>Active Players</span>
          <h2>125,431</h2>
        </div>
      </div>

      <div className="stat-card">
        <Swords className="h-6 w-6 text-green-500" />
        <div className="stat-info">
          <span>Items Listed</span>
          <h2>45,789</h2>
        </div>
      </div>
    </div>
  )
}

