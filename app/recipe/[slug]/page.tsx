"use client"

import Link from "next/link"
import { List, ChefHat } from "lucide-react"

export default function RecipePage({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col">
      {/* Status Bar */}
      <div className="status-bar">
        <div>8:00</div>
        <div className="flex space-x-1">
          <div>●</div>
          <div>●</div>
          <div>●</div>
        </div>
      </div>

      {/* Recipe Header */}
      <div className="bg-black p-6 pt-12">
        <h1 className="text-3xl font-bold mb-2">Classic Lasagna</h1>
        <p className="text-lg mb-1">Thursday May 11, Lunch</p>
        <p className="text-sm text-muted-foreground">Prep: 5 mins | Cook: 10 mins</p>
      </div>

      {/* Recipe Content */}
      <main className="flex-1 p-6 bg-card">
        <p className="mb-8">A delicious Italian dish with layers of rich meat sauce, pasta, and creamy cheese.</p>

        <div className="mb-8">
          <h2 className="step-number">Step 1</h2>
          <p>Preheat oven to 375°F (190°C). Cook noodles according to package instructions.</p>
        </div>

        <div className="mb-8">
          <h2 className="step-number">Step 2</h2>
          <p>
            In a skillet, cook beef over medium heat until browned. Stir in marinara sauce and simmer for 10 minutes.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="step-number">Step 3</h2>
          <p>
            Layer noodles, ricotta, meat sauce, and mozzarella in a baking dish. Repeat layers and top with remaining
            mozzarella.
          </p>
        </div>
      </main>

      {/* Tab Bar */}
      <div className="tab-bar">
        <Link href={`/recipe/${params.slug}/ingredients`} className="tab-item">
          <List className="h-5 w-5" />
          <span className="tab-text">Ingredients</span>
        </Link>
        <Link href={`/recipe/${params.slug}/method`} className="tab-item tab-active">
          <ChefHat className="h-5 w-5" />
          <span className="tab-text">Method</span>
        </Link>
      </div>
    </div>
  )
}
