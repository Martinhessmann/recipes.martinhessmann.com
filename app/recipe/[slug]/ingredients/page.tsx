"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronLeft, List, ChefHat } from "lucide-react"

export default function IngredientsPage({ params }: { params: { slug: string } }) {
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([])

  const toggleIngredient = (index: number) => {
    if (checkedIngredients.includes(index)) {
      setCheckedIngredients(checkedIngredients.filter((i) => i !== index))
    } else {
      setCheckedIngredients([...checkedIngredients, index])
    }
  }

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col">
      {/* Status Bar */}
      <div className="status-bar">
        <div>12:00</div>
        <div className="flex space-x-1">
          <div>●</div>
          <div>●</div>
          <div>●</div>
        </div>
      </div>

      {/* Recipe Header */}
      <div className="relative h-64">
        <img src="/placeholder.svg?height=400&width=600" alt="Classic Lasagna" className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <Link href={`/recipe/${params.slug}`}>
            <ChevronLeft className="h-6 w-6 text-white" />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h1 className="text-2xl font-semibold text-white">Classic Lasagna</h1>
        </div>
      </div>

      {/* Ingredients List */}
      <main className="flex-1 bg-card">
        <h2 className="text-xl font-medium p-4 border-b border-border">Ingredients</h2>
        <p className="px-4 py-2 text-sm text-muted-foreground">For 2 Portions:</p>

        <div className="px-4">
          <IngredientItem
            amount="200g"
            name="Ingredient One"
            checked={checkedIngredients.includes(0)}
            onClick={() => toggleIngredient(0)}
          />
          <IngredientItem
            amount="150g"
            name="Ingredient Two"
            checked={checkedIngredients.includes(1)}
            onClick={() => toggleIngredient(1)}
          />
          <IngredientItem
            amount="200g"
            name="Ingredient One"
            checked={checkedIngredients.includes(2)}
            onClick={() => toggleIngredient(2)}
          />
          <IngredientItem
            amount="150g"
            name="Ingredient Two"
            checked={checkedIngredients.includes(3)}
            onClick={() => toggleIngredient(3)}
          />
          <IngredientItem
            amount="150g"
            name="Ingredient Two"
            checked={checkedIngredients.includes(4)}
            onClick={() => toggleIngredient(4)}
          />
        </div>
      </main>

      {/* Tab Bar */}
      <div className="tab-bar">
        <Link href={`/recipe/${params.slug}/ingredients`} className="tab-item tab-active">
          <List className="h-5 w-5" />
          <span className="tab-text">Ingredients</span>
        </Link>
        <Link href={`/recipe/${params.slug}/method`} className="tab-item">
          <ChefHat className="h-5 w-5" />
          <span className="tab-text">Method</span>
        </Link>
      </div>
    </div>
  )
}

function IngredientItem({
  amount,
  name,
  checked,
  onClick,
}: {
  amount: string
  name: string
  checked: boolean
  onClick: () => void
}) {
  return (
    <div className="ingredient-item" onClick={onClick}>
      <div className="flex items-center">
        <div className={`ingredient-checkbox ${checked ? "ingredient-checked" : ""}`}>
          {checked && <span className="text-white">✓</span>}
        </div>
        <div className="ml-3">
          <div className="font-medium">{name}</div>
        </div>
      </div>
      <div className="text-muted-foreground">{amount}</div>
    </div>
  )
}
