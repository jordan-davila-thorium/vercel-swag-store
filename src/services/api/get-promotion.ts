import type { Promotion } from '@/services/types'
import { client } from './client'

export async function getPromotion(): Promise<Promotion> {
  return client<Promotion>('/promotions')
}
