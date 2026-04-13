'use client'

import { useFormStatus } from 'react-dom'

interface SubmitButtonProps {
  label?: string
  inStock?: boolean
}

export default function SubmitButton({ label = 'Add to Cart', inStock = true }: SubmitButtonProps) {
  const { pending } = useFormStatus()
  const disabled = pending || !inStock

  const text = !inStock ? 'Out of Stock' : pending ? 'Adding...' : label

  return (
    <button
      type="submit"
      disabled={disabled}
      aria-disabled={disabled}
      className="w-full rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {text}
    </button>
  )
}
