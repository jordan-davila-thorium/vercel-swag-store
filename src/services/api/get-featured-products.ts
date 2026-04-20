import { cacheLife, cacheTag } from 'next/cache'
import type { Product } from '@/services/types'
import { client } from './client'

export async function getFeaturedProducts(): Promise<Product[]> {
  'use cache'
  cacheLife('hours')
  cacheTag('featured-products')
  return client<Product[]>('/products?featured=true&limit=6')
}
