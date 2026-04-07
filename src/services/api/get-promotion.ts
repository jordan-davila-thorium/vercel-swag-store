import type { Promotion } from '@/services/types'
import { apiFetch } from './client'

export async function getPromotion(): Promise<Promotion> {
  return apiFetch<Promotion>('/promotions')
}
