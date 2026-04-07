import type { Product } from '@/services/types'
import ProductCard from '@/components/partials/product-card'

export default function ProductGrid({
  products,
  preloadFirst = 0,
}: {
  products: Product[]
  preloadFirst?: number
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} preloadImage={i < preloadFirst} />
      ))}
    </div>
  )
}
