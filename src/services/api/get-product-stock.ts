import type { StockInfo } from '@/services/types'
import { apiFetch } from './client'

export async function getProductStock(id: string): Promise<StockInfo> {
  return apiFetch<StockInfo>(`/products/${id}/stock`)
}
