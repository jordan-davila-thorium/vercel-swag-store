import type { Product } from '@/services/types'
import { client } from './client'

export async function searchProducts(
  query?: string,
  category?: string,
  limit = 5
): Promise<Product[]> {
  const params = new URLSearchParams()
  if (query) params.set('search', query)
  if (category) params.set('category', category)
  params.set('limit', String(limit))
  return client<Product[]>(`/products?${params.toString()}`)
}
