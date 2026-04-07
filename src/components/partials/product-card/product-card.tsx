import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/services/types'
import { formatPrice } from '@/services/utils'

export default function ProductCard({
  product,
  preloadImage = false,
}: {
  product: Product
  preloadImage?: boolean
}) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="aspect-square overflow-hidden rounded-lg border border-border bg-muted">
        {product.images[0] && (
          <Image
            src={product.images[0]}
            alt={product.name}
            width={500}
            height={500}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            preload={preloadImage}
            quality={80}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        )}
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {formatPrice(product.price, product.currency)}
        </p>
      </div>
    </Link>
  )
}
