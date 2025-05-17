"use client"

import Link from "next/link"
import { useState } from "react"
import { List, ChefHat } from "lucide-react"

export default function Home() {
  const [activeDate, setActiveDate] = useState(11)

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col">
      {/* Status Bar */}
      <div className="status-bar">
        <div>14:30</div>
        <div className="flex space-x-1">
          <div>●</div>
          <div>●</div>
          <div>●</div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6">
        {/* Date Selector */}
        <div className="date-selector">
          <DateItem day="Thu" number={11} active={activeDate === 11} onClick={() => setActiveDate(11)} />
          <DateItem day="Fri" number={12} active={activeDate === 12} onClick={() => setActiveDate(12)} />
          <DateItem day="Sat" number={13} active={activeDate === 13} onClick={() => setActiveDate(13)} />
          <DateItem day="Sun" number={14} active={activeDate === 14} onClick={() => setActiveDate(14)} />
        </div>

        {/* Today's Recipes */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Today's Recipes</h2>
          <Link href="#" className="text-primary text-sm">
            See All
          </Link>
        </div>

        {/* Recipe Cards */}
        <Link href="/recipe/overnight-oats">
          <div className="recipe-card">
            <img src="/placeholder.svg?height=300&width=400" alt="Overnight Oats" className="recipe-image" />
            <div className="recipe-info">
              <h3 className="recipe-title">Overnight Oats</h3>
              <p className="recipe-meta">Prep: 5 mins | Cook: 10 mins</p>
            </div>
          </div>
        </Link>

        <div className="recipe-card">
          <div className="flex items-center px-4 py-2 text-sm">
            <span className="text-secondary mr-2">Chef Jamie</span>
            <span className="text-muted-foreground">Today</span>
          </div>
          <img src="/placeholder.svg?height=300&width=400" alt="Lentil Soup" className="recipe-image" />
          <div className="recipe-info">
            <h3 className="recipe-title">Lentil Soup</h3>
            <p className="recipe-meta">Prep: 10 mins | Cook: 30 mins | Medium | Seasonal</p>
          </div>
        </div>
      </main>

      {/* Tab Bar */}
      <div className="tab-bar">
        <Link href="/" className="tab-item tab-active">
          <List className="h-5 w-5" />
          <span className="tab-text">Recipes</span>
        </Link>
        <Link href="#" className="tab-item">
          <ChefHat className="h-5 w-5" />
          <span className="tab-text">Cook</span>
        </Link>
      </div>
    </div>
  )
}

function DateItem({
  day,
  number,
  active,
  onClick,
}: {
  day: string
  number: number
  active: boolean
  onClick: () => void
}) {
  return (
    <div className="date-item" onClick={onClick}>
      <span className="date-day">{day}</span>
      <span className={`date-number ${active ? "date-active" : ""}`}>{number}</span>
    </div>
  )
}
