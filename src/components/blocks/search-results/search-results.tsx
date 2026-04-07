import { searchProducts } from '@/services/api'
import ProductGrid from '@/components/blocks/product-grid'

export default async function SearchResults({
  query,
  category,
}: {
  query?: string
  category?: string
}) {
  const products = await searchProducts(query, category)

  if (products.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">
          {query || category
            ? 'No products found. Try a different search.'
            : 'Start searching to find products.'}
        </p>
      </div>
    )
  }

  return <ProductGrid products={products} />
}
