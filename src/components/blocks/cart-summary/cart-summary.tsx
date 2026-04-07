import type { Cart } from '@/services/types'
import { formatPrice } from '@/services/utils'

export default function CartSummary({ cart }: { cart: Cart }) {
  return (
    <div className="rounded-lg border border-border p-6">
      <h2 className="text-lg font-semibold">Order Summary</h2>
      <div className="mt-4 flex justify-between border-t border-border pt-4">
        <span className="text-muted-foreground">Subtotal</span>
        <span className="font-semibold">{formatPrice(cart.subtotal, cart.currency)}</span>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        Shipping and taxes calculated at checkout.
      </p>
    </div>
  )
}
