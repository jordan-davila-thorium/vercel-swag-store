import { cacheLife, cacheTag } from 'next/cache'
import type { Product } from '@/services/types'
import { client } from './client'

export async function searchProducts(
  query?: string,
  category?: string,
  limit = 5
): Promise<Product[]> {
  'use cache'
  cacheLife('hours')
  cacheTag('products')
  const params = new URLSearchParams()
  if (query) params.set('search', query)
  if (category) params.set('category', category)
  params.set('limit', category ? String(limit) : '10')
  return client<Product[]>(`/products?${params.toString()}`)
}
