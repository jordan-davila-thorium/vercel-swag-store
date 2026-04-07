import { cacheLife, cacheTag } from 'next/cache'
import type { Product } from '@/services/types'
import { apiFetch } from './client'

export async function getProduct(slug: string): Promise<Product | null> {
  'use cache'
  cacheLife('hours')
  cacheTag('products', `product-${slug}`)
  try {
    return await apiFetch<Product>(`/products/${slug}`)
  } catch {
    return null
  }
}
