import type { Cart } from '@/services/types'
import { apiFetch } from './client'

export async function removeCartItemApi(token: string, itemId: string): Promise<Cart> {
  return apiFetch<Cart>(`/cart/${itemId}`, {
    method: 'DELETE',
    headers: { 'x-cart-token': token },
  })
}
