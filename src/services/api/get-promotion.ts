import { cacheLife, cacheTag } from 'next/cache'
import type { Promotion } from '@/services/types'
import { client } from './client'

export async function getPromotion(): Promise<Promotion> {
  'use cache'
  cacheLife('hours')
  cacheTag('promotion')
  return client<Promotion>('/promotions')
}
