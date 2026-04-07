import type { Cart } from '@/services/types'
import { apiFetch } from './client'

export async function getCart(token: string): Promise<Cart | null> {
  try {
    return await apiFetch<Cart>('/cart', {
      headers: { 'x-cart-token': token },
    })
  } catch {
    return null
  }
}
