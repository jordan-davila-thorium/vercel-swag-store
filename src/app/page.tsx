import { Suspense } from 'react'
import { getFeaturedProducts } from '@/services/api'
import Hero from '@/components/blocks/hero'
import ProductGrid from '@/components/blocks/product-grid'
import PromoBanner from '@/components/blocks/promo-banner'

export default async function HomePage() {
  const products = await getFeaturedProducts()

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <Hero />
      <section className="mb-12">
        <Suspense fallback={<div className="h-12 animate-pulse rounded-lg bg-muted" />}>
          <PromoBanner />
        </Suspense>
      </section>
      <section className="pb-16">
        <h2 className="mb-8 text-2xl font-bold">Featured Products</h2>
        <ProductGrid products={products} preloadFirst={3} />
      </section>
    </div>
  )
}
