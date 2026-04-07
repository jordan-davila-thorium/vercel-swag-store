'use client'

import { useState } from 'react'

export default function QuantitySelector({
  max = 10,
  onChange,
}: {
  max?: number
  onChange?: (qty: number) => void
}) {
  const [quantity, setQuantity] = useState(1)

  function update(next: number) {
    const clamped = Math.max(1, Math.min(next, max))
    setQuantity(clamped)
    onChange?.(clamped)
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => update(quantity - 1)}
        disabled={quantity <= 1}
        className="flex h-8 w-8 items-center justify-center rounded border border-border text-sm transition-colors hover:bg-accent disabled:opacity-50"
      >
        −
      </button>
      <input
        type="number"
        name="quantity"
        value={quantity}
        onChange={(e) => update(Number(e.target.value))}
        min={1}
        max={max}
        className="h-8 w-14 [appearance:textfield] rounded border border-border bg-background text-center text-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button
        type="button"
        onClick={() => update(quantity + 1)}
        disabled={quantity >= max}
        className="flex h-8 w-8 items-center justify-center rounded border border-border text-sm transition-colors hover:bg-accent disabled:opacity-50"
      >
        +
      </button>
    </div>
  )
}
