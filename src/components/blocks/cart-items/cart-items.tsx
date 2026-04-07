import type { CartItem } from '@/services/types'
import CartItemRow from '@/components/partials/cart-item-row'

export default function CartItems({ items }: { items: CartItem[] }) {
  return (
    <div className="divide-y divide-border">
      {items.map((item) => (
        <CartItemRow key={item.productId} item={item} />
      ))}
    </div>
  )
}
