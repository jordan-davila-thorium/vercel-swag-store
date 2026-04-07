import Image from 'next/image'
import type { Product } from '@/services/types'

export default function ProductImage({ product }: { product: Product }) {
  return (
    <div className="aspect-square overflow-hidden rounded-lg border border-border bg-muted">
      {product.images[0] && (
        <Image
          src={product.images[0]}
          alt={product.name}
          width={600}
          height={600}
          className="h-full w-full object-cover"
          preload
          quality={80}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      )}
    </div>
  )
}
