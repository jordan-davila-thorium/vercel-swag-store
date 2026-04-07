'use client'

import Image from 'next/image'
import { useActionState } from 'react'
import { removeFromCart, updateCartItem } from '@/services/actions'
import type { CartItem } from '@/services/types'
import { formatPrice } from '@/services/utils'

export default function CartItemRow({ item }: { item: CartItem }) {
  const [, updateAction, updatePending] = useActionState(
    updateCartItem.bind(null, item.productId),
    { success: false, message: '' }
  )
  const [, removeAction, removePending] = useActionState(
    removeFromCart.bind(null, item.productId),
    { success: false, message: '' }
  )

  return (
    <div className="flex gap-4 py-4">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
        {item.product.images[0] && (
          <Image
            src={item.product.images[0]}
            alt={item.product.name}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">{item.product.name}</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {formatPrice(item.product.price, item.product.currency)}
            </p>
          </div>
          <p className="text-sm font-medium">
            {formatPrice(item.lineTotal, item.product.currency)}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <form action={updateAction} className="flex items-center gap-1">
            <input type="hidden" name="quantity" value={Math.max(1, item.quantity - 1)} />
            <button
              type="submit"
              disabled={updatePending || item.quantity <= 1}
              className="flex h-7 w-7 items-center justify-center rounded border border-border text-xs hover:bg-accent disabled:opacity-50"
            >
              −
            </button>
          </form>
          <span className="w-6 text-center text-sm">{item.quantity}</span>
          <form action={updateAction}>
            <input type="hidden" name="quantity" value={item.quantity + 1} />
            <button
              type="submit"
              disabled={updatePending}
              className="flex h-7 w-7 items-center justify-center rounded border border-border text-xs hover:bg-accent disabled:opacity-50"
            >
              +
            </button>
          </form>
          <form action={removeAction}>
            <button
              type="submit"
              disabled={removePending}
              className="text-xs text-red-500 hover:text-red-400 disabled:opacity-50"
            >
              Remove
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
