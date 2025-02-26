import Image from "next/image"

export default function NFTGrid() {
  return (
    <div className="items-grid">
      {items.map((item, i) => (
        <div key={i} className="item-card">
          <div className="item-level">Level {item.level}</div>
          <div className="item-image">
            <Image
              src={
                item.image ||
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JAcFJLt41KeKGFXw3bOnF9GSyKHHlz.png"
              }
              alt={item.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="item-info">
            <div className="item-header">
              <div>
                <h3>{item.name}</h3>
                <p className="item-type">{item.type}</p>
              </div>
              <span className={`rarity-badge ${item.rarity.toLowerCase()}`}>{item.rarity}</span>
            </div>

            <div className="item-stats">
              <StatBar label="Attack" value={item.attack} color="bg-red-500" />
              <StatBar label="Defense" value={item.defense} color="bg-blue-500" />
              <StatBar label="Speed" value={item.speed} color="bg-yellow-500" />
            </div>

            <div className="item-footer">
              <div>
                <span>Price</span>
                <p className="price">{item.price} GOLD</p>
              </div>
              <button className="button button-dark">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

interface StatBarProps {
    label: string;
    value: number;
    color: string;
  }
  
  function StatBar({ label, value, color }: StatBarProps) {
    return (
      <div className="flex items-center gap-2">
        <span className="w-16 text-sm">{label}</span>
        <div className="stat-bar">
          <div className={color} style={{ width: `${value}%` }} />
        </div>
      </div>
    );
  }
  
const items = [
  {
    name: "Dragon Slayer",
    type: "Legendary Sword",
    rarity: "Mythical",
    level: 50,
    attack: 85,
    defense: 30,
    speed: 60,
    price: "5000",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JAcFJLt41KeKGFXw3bOnF9GSyKHHlz.png",
  },
  {
    name: "Shadow Armor",
    type: "Epic Armor",
    rarity: "Epic",
    level: 45,
    attack: 20,
    defense: 90,
    speed: 40,
    price: "3500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JAcFJLt41KeKGFXw3bOnF9GSyKHHlz.png",
  },
  {
    name: "Swift Boots",
    type: "Rare Boots",
    rarity: "Rare",
    level: 30,
    attack: 15,
    defense: 25,
    speed: 95,
    price: "2000",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JAcFJLt41KeKGFXw3bOnF9GSyKHHlz.png",
  },
  {
    name: "Mage Staff",
    type: "Magic Weapon",
    rarity: "Legendary",
    level: 40,
    attack: 95,
    defense: 15,
    speed: 45,
    price: "4500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JAcFJLt41KeKGFXw3bOnF9GSyKHHlz.png",
  },
]

