import { cache } from 'react'
import type { StockInfo } from '@/services/types'
import { client } from './client'

// Per-request dedup only — stock must stay live, so we avoid Next's "use cache".
// Used on: stock-indicator & add-to-cart-form-with-stock (both render on the product details page).
export const getProductStock = cache(
  async (id: string): Promise<StockInfo> => client<StockInfo>(`/products/${id}/stock`)
)
