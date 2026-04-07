import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { getProduct } from '@/services/api'
import AddToCartForm from '@/components/partials/add-to-cart-form'
import ProductImage from '@/components/partials/product-image'
import ProductInfo from '@/components/partials/product-info'
import StockIndicator from '@/components/ui/stock-indicator'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)
  if (!product) return { title: 'Product Not Found' }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: product.images,
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProduct(slug)
  if (!product) notFound()

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="grid gap-8 md:grid-cols-2">
        <ProductImage product={product} />
        <div>
          <ProductInfo product={product} />
          <div className="mt-4">
            <Suspense fallback={<div className="h-5 w-24 animate-pulse rounded bg-muted" />}>
              <StockIndicator productId={product.id} />
            </Suspense>
          </div>
          <div className="mt-6">
            <AddToCartForm product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}
