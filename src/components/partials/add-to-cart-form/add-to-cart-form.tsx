'use client'

import { useActionState } from 'react'
import { addToCart } from '@/services/actions'
import type { Product } from '@/services/types'
import QuantitySelector from '@/components/ui/quantity-selector'
import SubmitButton from '@/components/ui/submit-button'

export default function AddToCartForm({ product }: { product: Product }) {
  const [state, formAction] = useActionState(addToCart.bind(null, product.id), {
    success: false,
    message: '',
  })

  return (
    <form action={formAction}>
      <QuantitySelector />
      <div className="mt-4">
        <SubmitButton />
      </div>
      {state.message && (
        <p className={`mt-2 text-sm ${state.success ? 'text-green-500' : 'text-red-500'}`}>
          {state.message}
        </p>
      )}
    </form>
  )
}
