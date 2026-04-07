import { getProductStock } from '@/services/api'
import { cn } from '@/services/utils'

export default async function StockIndicator({ productId }: { productId: string }) {
  const stock = await getProductStock(productId)

  return (
    <p
      className={cn('text-sm font-medium', {
        'text-green-500': stock.inStock && !stock.lowStock,
        'text-yellow-500': stock.lowStock,
        'text-red-500': !stock.inStock,
      })}
    >
      {stock.inStock
        ? stock.lowStock
          ? `Low stock — only ${stock.stock} left`
          : 'In stock'
        : 'Out of stock'}
    </p>
  )
}
