import { cache } from 'react'
import type { StockInfo } from '@/services/types'
import { apiFetch } from './client'

export const getProductStock = cache(
  async (id: string): Promise<StockInfo> => apiFetch<StockInfo>(`/products/${id}/stock`)
)
