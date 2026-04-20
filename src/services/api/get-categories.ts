import { cacheLife, cacheTag } from 'next/cache'
import type { Category } from '@/services/types'
import { client } from './client'

export async function getCategories(): Promise<Category[]> {
  'use cache'
  cacheLife('days')
  cacheTag('categories')
  return client<Category[]>('/categories')
}
