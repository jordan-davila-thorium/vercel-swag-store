import { getProductStock } from '@/services/api'
import type { Product } from '@/services/types'
import AddToCartForm from './add-to-cart-form'

export default async function AddToCartFormWithStock({ product }: { product: Product }) {
  const stock = await getProductStock(product.id)
  return <AddToCartForm product={product} inStock={stock.inStock} />
}
