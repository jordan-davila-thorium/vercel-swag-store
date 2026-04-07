import type { Product } from '@/services/types'
import { formatPrice } from '@/services/utils'

export default function ProductInfo({ product }: { product: Product }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground capitalize">{product.category}</p>
      <h1 className="mt-1 text-3xl font-bold">{product.name}</h1>
      <p className="mt-2 text-2xl font-semibold">{formatPrice(product.price, product.currency)}</p>
      <p className="mt-4 leading-relaxed text-muted-foreground">{product.description}</p>
    </div>
  )
}
