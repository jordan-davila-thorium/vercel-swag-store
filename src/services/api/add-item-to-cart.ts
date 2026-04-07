import type { Cart } from '@/services/types'
import { apiFetch } from './client'

export async function addItemToCart(
  token: string,
  productId: string,
  quantity: number
): Promise<Cart> {
  return apiFetch<Cart>('/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-cart-token': token,
    },
    body: JSON.stringify({ productId, quantity }),
  })
}
